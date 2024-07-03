// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { OpenAIStream, StreamingTextResponse } from "ai";
// import { DataAPIClient } from "@datastax/astra-db-ts";
// import dotenv from 'dotenv'

// dotenv.config();

// const { AI_API_KEY, ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_API_ENDPOINT } =
//   process.env;

// const geminiAI = new GoogleGenerativeAI(AI_API_KEY);

// const model = geminiAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // Initialize the client and get a "Db" object
// const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
// const db = client.db(ASTRA_DB_API_ENDPOINT);

// export async function POST(req, res) {
//   const { messages } = req.body;

//   const latestMessage = messages[messages?.length - 1]?.content;
//   let docContext = "";

//   const { data } = await openai.embeddings.create({
//     input: latestMessage,
//     model: "text-embedding-3-small",
//   });

//   const collection = db.collection("portfolio");

//   const cursor = collection.find(null, {
//     sort: {
//       $vector: data[0]?.embedding,
//     },
//     limit: 5,
//   });

//   const documents = await cursor.toArray();

//   docContext = `
//               START CONTEXT
//               ${documents?.map((doc) => doc.description).join("\n")}
//               END CONTEXT
//               `;

//   const ragPrompt = [
//     {
//       role: "system",
//       content: `
//                   You are an AI assistant answering questions as Piyush Agarwal in his Portfolio App.
//                   Format responses using markdown where applicable.
//                   ${docContext}
//                   If the answer is not provided in the context, the AI assistant will say,
//                   "I'am sorry, I do not know the answer".
//                   `,
//     },
//   ];

//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     stream: true,
//     messages: [...ragPrompt, ...messages],
//   });
//   const stream = OpenAIStream(response);
//   return new StreamingTextResponse(stream);
// }
