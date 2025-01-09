# Hello Everyone

We are team Bharat-Tech showcasing our Gen-AI application called **"Social Co-Pilot"** to LEVEL SUPER MIND & CHAI AUR CODE.  
Social Co-Pilot AI application is used to get analytics and insights from your social media accounts using AI.

In this app we have used the Gen-AI platform **Langflow** and **ASTRADB** database.

## The module will allow users to see:
1. Social media engagement metrics such as likes, shares, comments, and post types (e.g., Carousel, Reels, Static).
2. Valuable insights based on the calculated metrics.
3. Recommendations to increase engagement.

## Tools used:
1. **DataStax Astra DB** for database operations.
2. **Langflow** for workflow creation.
3. **Groq** for LLM integration.
4. **React JS** for frontend and **Node JS** for backend.
5. **Vercel** for final deployment.

## Our Flow:

1. **AstraDB Database setup**:  
   First of all, we have created a database in AstraDB and imported our demo social media CSV file into it.

2. **Langflow overview**:  
   - Firstly we have our first component called **"Chat Input"** which takes input questions from the user.  
   - Then we have a **"Prompt Component"** which frames the user question more clearly and concisely, which will be helpful for the next AI component to understand.  
   - After that, we have our main component **"Agent Component"**, which is responsible for all the data processing stuff like generating relevant outputs on the user's question. This agent component is further connected with our **"AstraDB Component"** from which the data is coming and processed using **Groq LLM**.  
   - In this agent, we have used the **Groq Large Language Model** to generate the answer.  
   - And finally, our resulting response goes to the **"Chat Output Component"**.

3. **Langflow JS API**:  
   We have integrated the Langflow JavaScript API into our final application.

4. **Final Application**:  
   - **Frontend**: We have designed our frontend very minimally so the user doesn't get confused about where to go. We don't use any graphs or other things to make this application clean and user-friendly.  
   - **Backend**: We have used Node.js as our application backend, and the Langflow API is integrated here.

5. **Deployment**:  
   After solving a bunch of errors and learning new things, we have finally deployed our app on the Vercel platform.

---


**Chandan Suthar** & **Dhaval Tarkhala** , 2nd-year B.Tech students from Ahmedabad.
