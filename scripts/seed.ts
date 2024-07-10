import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });
const main = async () => {
  try {
    console.log("Seeding database...");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);



    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/ES.svg",
      },
      {
        id: 2,
        title: "Italian",
        imageSrc: "/IT.svg",
      },
      {
        id: 3,
        title: "German",
        imageSrc: "/DE.svg",
      },
      {
        id: 4,
        title: "French",
        imageSrc: "/FR.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Spanish
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // unit 1 (Learn the basics)
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1, // unit 1 (Learn the basics)
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1, // unit 1 (Learn the basics)
        order: 3,
        title: "Pronouns",
      },
      {
        id: 4,
        unitId: 1, // unit 1 (Learn the basics)
        order: 4,
        title: "Daily conversation",
      },
      {
        id: 5,
        unitId: 1, // unit 1 (Learn the basics)
        order: 5,
        title: "Advanced conversation",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "The man"?',
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "ASSIST",
        order: 2,
        question: '"The man"',
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: '"Which one of these is "The robot"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // which one of these is "The man"
        imageSrc: "/man.svg",
        correct: true,
        text: "El hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "El mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "El robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, //"the man"
        correct: true,
        text: "El hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "El mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "El robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // which one of these is "The robot"
        imageSrc: "/man.svg",
        correct: false,
        text: "El hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/woman.svg",
        correct: false,
        text: "El mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/robot.svg",
        correct: true,
        text: "El robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2, // VERBS
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "The man"?',
      },
      {
        id: 5,
        lessonId: 2, // VERBS
        type: "ASSIST",
        order: 2,
        question: '"The man"',
      },
      {
        id: 6,
        lessonId: 2, // VERBS
        type: "SELECT",
        order: 3,
        question: '"Which one of these is "The robot"?',
      },
    ]);

    console.log("Database seeded");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed database");
  }
};

main();
