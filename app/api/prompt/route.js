import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const revalidate = 0;

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(
      { error: "Failed to fetch all prompts" },
      { status: 500 }
    );
  }
};
