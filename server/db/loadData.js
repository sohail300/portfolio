import { GoogleGenerativeAI } from "@google/generative-ai";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { data } from "../utils/data.js";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = "AIzaSyBsA3-aS6Pbz1-g6x0ZZaUxg3zPyTAtz5A";

const geminiAI = new GoogleGenerativeAI(apiKey);

const model = geminiAI.getGenerativeModel({ model: "models/text-embedding-004" });

const client = new DataAPIClient('AstraCS:KrKELLMinpUAKAaLKyYTusiD:f8769903e7e7fde223efa698b31551c8f3eb5f6b8cfa9ef7b41b2e041d97399d');
const db = client.db('https://25d21ac4-184f-4816-a1f9-8b20c55ee198-us-east-2.apps.astra.datastax.com');

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

async function createCollection() {
  try {
    await db.createCollection("portfolio", {
      vector: {
        dimension: 1536,
      },
    });
  } catch (error) {
    console.log("Collection Already Exists", error);
  }
}

async function loadData() {
  const collection = db.collection("portfolio");
  for await (const { id, info, description } of data) {
    const chunks = await splitter.splitText(description);

    for await (const chunk of chunks) {
      const data = await model.embedContent({
        content: chunk,
      });

      const res = await collection.insertOne({
        document_id: id,
        $vector: data?.embedding,
        info,
        description: chunk,
      });
    }
  }
  console.log("data added");
}

createCollection().then(() => loadData());
