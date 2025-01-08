
async function getResultFromAI(question) {
  try {
    const APPLICATION_TOKEN = process.env.VITE_LANGFLOW_APPLICATION_TOKEN;
    const LANGFLOW_URL = process.env.VITE_LANGFLOW_URL;

    if (!APPLICATION_TOKEN || !LANGFLOW_URL) {
      throw new Error(
        "Environment variables are not defined. Check your .env file."
      );
    }
    const headers = {
      Authorization: `Bearer ${APPLICATION_TOKEN}`,
      "Content-Type": "application/json",
    };

    console.log("HEADER -> ", headers);

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

    console.log("From Langflow API function: ", response);

    const textResponse = await response.json();
    console.log(textResponse.outputs[0].inputs.input_value);
    console.log(textResponse.outputs[0].outputs[0].artifacts.message);

    const newMessage = {
      input: textResponse.outputs[0].inputs.input_value,
      output: textResponse.outputs[0].outputs[0].artifacts.message,
    };

    // console.log("From API calling: ", answer);
    return { question: newMessage.input, answer: newMessage.output };
    // return 'Hi';
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
