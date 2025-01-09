import { useState, useRef, useEffect } from "react";
import "./App.css";
import "./index.css";
import "./assets/fonts/digital_desolation.ttf";
import sendIcon from "../src/assets/images/send-icon.svg";
import ChatResponse from "./components/ChatResponse.component";
import StatsCard from "./components/StatsCard.component";
import PropagateLoader from "react-spinners/PropagateLoader";

import like_icon from "./assets/images/likes-icon.svg";
import comment_icon from "./assets/images/comment-icon.svg";
import share_icon from "./assets/images/share-icon.svg";

// import 'dotenv/config'

const POST_STATS_URL = import.meta.env.VITE_POST_STATS_URL;
const LANGFLOW_URL = import.meta.env.VITE_LANGFLOW_API_URL;



function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postStats, setPostStats] = useState({});

  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    fetchPostStats();
  }, [answer]);

  async function fetchAPI() {
    try {
      if (question != "") {
        setLoading(true);
        const url = `${LANGFLOW_URL}${question}`;
        const response_mid = await fetch(url);
        (url)
        const response = await response_mid.json();
        (response);
        if (response) {
          setAnswer([
            ...answer,
            { question: response.question, answer: response.answer },
          ]);
        }

        setLoading(false);
        setQuestion("");
      }
    } catch (error) {
      (error);
    }
  }

  async function fetchPostStats() {
    try {
      const url = POST_STATS_URL;
      const response_fetch = await fetch(url);
      const response = await response_fetch.json();
      if (response_fetch.status == "200") {
        setPostStats(response);
      }
    } catch (error) {
      (error.message);
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#f5f5f5] p-2">
      <div className="w-full h-[10vh]  flex text-center my-auto items-center p-2 ">
        <p className="font-medium font-earth text-xl w-fit p-6 h-fit">
          Social{" "}
          <span className="bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] rounded-md text-white px-2 py-1 font-dd  ">
            Co-Pilot
          </span>{" "}
        </p>
      </div>

      {/* Main chat section */}
      <div className=" h-[70vh] mt-5 px-6  w-full ">
        {/* <div className="absolute -inset-2 bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] opacity-75 blur ">Hello</div> */}
        <div className=" h-[70vh] w-full p-2">
          <div className="chat-diaglog h-full w-full border-4  border-[#EEEEEE]  rounded-md bg-white relative ">
            {/* Chat header */}
            <div className="chat-header  absolute w-full h-10 text-center font-semibold text-2xl my-3">
              Chat
            </div>

            {/* Chat body */}
            <div className="w-full  flex justify-center absolute top-14 bottom-24 ">
              <div
                className="w-4/5 overflow-y-auto no-scrollbar"
                ref={scrollRef}
              >
                {answer.length > 0 ? (
                  answer.map((ans, i) => (
                    <ChatResponse
                      key={i}
                      question={ans.question}
                      answer={ans.answer}
                    />
                  ))
                ) : (
                  <div className="h-full text-center flex items-center justify-center text-2xl font-semibold text-[#4a4747]">
                    How may I help you today?
                  </div>
                )}
              </div>
            </div>

            {/* Chat footer absolute*/}
            <div className="chat-footer w-full h-fit  flex flex-col  items-center justify-center py-4 f-fit  absolute bottom-0 ">
              <div className="border-2 mb-6">
                <PropagateLoader color="#5EBFD6" loading={loading} />
              </div>
              <div className="w-4/5 text-lg flex items-center border-2 border-black">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="h-full w-full p-4 focus:outline-none"
                  placeholder="Write something here.."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") fetchAPI();
                  }}
                />
                <button className="send-icon px-6 ">
                  <img onClick={fetchAPI} src={sendIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats card */}
      <div className="lg:h-[30vh] px-6">
        <div className=" h-full w-full lg:flex flex flex-col lg:flex-row  lg:flex-wrap justify-around pt-10 px-10">
          <StatsCard
            color={"#F7E326"}
            heading={"Likes"}
            message={"Total likes in x1000"}
            figures={postStats.total_likes}
            icon={like_icon}
          />
          <StatsCard
            color={"#03B46B"}
            heading={"Comments"}
            message={"Total comments in x1000"}
            figures={postStats.total_comments}
            icon={comment_icon}
          />
          <StatsCard
            color={"#D458CF"}
            heading={"Share"}
            message={"Total shares in x1000"}
            figures={postStats.total_shares}
            icon={share_icon}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
