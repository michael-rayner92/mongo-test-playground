import mongoose from "mongoose";
import { ProjectInterface } from "../db/models/Project";
import { connectDb, getAllProjects, addNewProject } from "./mongo";

describe("MongoDB Service", () => {
  let mongoClient: typeof mongoose;

  beforeAll(async () => {
    mongoClient = await connectDb(process.env.MONGO_URL as string);
  });

  afterAll(async () => {
    await mongoClient.connection.close();
  });

  afterEach(async () => {
    await mongoClient.connection.db.dropDatabase();
  });

  test("Get all projects", async () => {
    const projects = await getAllProjects();

    expect(projects.length).toBe(0);
  });

  test("Add new project", async () => {
    const newProject: Partial<ProjectInterface> = {
      name: "This is a new project",
      description: "And the description"
    };

    await addNewProject(newProject);

    const projects = await getAllProjects();
    expect(projects.length).toBe(1);
  });
});
