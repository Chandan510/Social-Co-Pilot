
async function getResultFromAI(question) {
  try {
    console.log("Inside getResults")
    const APPLICATION_TOKEN = 'AstraCS:XTYIPJAdguyIpvkNQxaZlQTa:5593939f7b7fa8673c45c8001b6caacd650955125b2d34d93068d89947944ab6'
    const LANGFLOW_URL = 'https://api.langflow.astra.datastax.com/lf/77f3da90-2eca-4299-b628-29f03bb26822/api/v1/run/3f7a47fd-2ddf-4b70-9bce-b75e24dd5f97?stream=false'

    if (!APPLICATION_TOKEN || !LANGFLOW_URL) {
      throw new Error(
        "Environment variables are not defined. Check your .env file."
      );
    }
    const headers = {
      Authorization: `Bearer ${APPLICATION_TOKEN}`,
      "Content-Type": "application/json",
    };


    const body = {
      input_value: question,
      input_type: "chat",
      output_type: "chat",
      tweaks: {
        "ChatInput-klpCV": {},
        "ChatOutput-cQ75i": {},
        "Agent-SFtGx": {},
        "AstraDBToolComponent-vgbkk": {},
      },
    };

    const response = await fetch(LANGFLOW_URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    // console.log("Inside getResults response ", response)
    const textResponse = await response.json();

    const newMessage = {
      input: textResponse.outputs[0].inputs.input_value,
      output: textResponse.outputs[0].outputs[0].artifacts.message,
    };

    return { question: newMessage.input, answer: newMessage.output };
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 429) {
      console.log("Rate limit exceeded. Retrying in 2 seconds...");
      setTimeout(() => runflow(inputValue), 2000); // Retry after 2 seconds
    } else {
      console.log(error.response ? error.response.data : error.message);
    }
  }
}

export { getResultFromAI };
