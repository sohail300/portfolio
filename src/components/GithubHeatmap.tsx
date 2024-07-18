import axios from "axios";
import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";

const GithubHeatmap = () => {
  interface GitHubContributionDay {
    date: string;
    contributionCount: number;
  }

  interface GitHubContributionWeek {
    contributionDays: GitHubContributionDay[];
  }

  interface ContributionDay {
    date: string;
    count: number;
    level: number;
  }

  const [contributionData, setContributionData] = useState<ContributionDay[]>(
    []
  );

  const getLevel = (count: number): number => {
    if (count === 0) return 0;
    if (count < 2) return 1;
    if (count < 4) return 2;
    if (count < 6) return 3;
    return 4;
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const username = import.meta.env.VITE_GITHUB_USERNAME;

      const query = `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          { query },
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        );

        const weeks =
          response.data.data.user.contributionsCollection.contributionCalendar
            .weeks;
        const data: ContributionDay[] = weeks.flatMap(
          (week: GitHubContributionWeek) =>
            week.contributionDays.map((day: GitHubContributionDay) => ({
              date: day.date,
              count: day.contributionCount,
              level: getLevel(day.contributionCount),
            }))
        );
        setContributionData(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className=" flex flex-col z-0 px-8 py-8 bg-transparent w-auto"
      id="achievements"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center mb-8">
        Github Streak ⚡
      </div>
      <ActivityCalendar
        blockSize={15}
        fontSize={16}
        data={contributionData}
        colorScheme="dark"
        style={{ margin: "auto", color: "#fff" }}
        theme={{
          light: ["hsl(0, 0%, 92%)", "firebrick"],
          dark: ["#333", "#03fc4e"],
        }}
      ></ActivityCalendar>
    </div>
  );
};

export default GithubHeatmap;
