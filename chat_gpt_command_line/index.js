require("dotenv").config();
const prompt = require("prompt-sync")();

// ------------------------------- connect to ai api -------------------------------
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async () => {
  let firstPrompt = "🤖 How can I help you?   ";
  let continuePrompt = "🤖 What else can I help you with?   ";
  let counter = 0;
  let aiPrompt = "something";
  while (
    aiPrompt != "" ||
    aiPrompt === "nothing" ||
    aiPrompt === "no" ||
    aiPrompt === "n"
  ) {
    counter++;
    // ----------------------------- ask ai a question
    if (counter == 1) {
      aiPrompt = prompt(firstPrompt);
    } else {
      aiPrompt = prompt(continuePrompt);
    }

    console.log("🤖bleep....*revving*...*whirring*....*clanging*...🤖");

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: aiPrompt,
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    const data = response.data.choices;
    const aiResponse = data[0].text;

    console.log(aiResponse);
  }
  console.log("🤖...");
})();
