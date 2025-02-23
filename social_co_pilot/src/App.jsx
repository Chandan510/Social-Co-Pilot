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

import Footer from "./components/Footer.jsx"

import { Link, Element } from "react-scroll";

import Spline from "@splinetool/react-spline";
import macintosh from "./assets/images/macintosh.png";
import serverrack from "./assets/images/server-rack.png";
import painbrush from "./assets/images/paintbrush.png";
import langchain from "./assets/images/langchain.png";

import reactlogo from "./assets/images/react.png";
import langflow from "./assets/images/langflow.png";
import tailwind from "./assets/images/tailwind.png";
import groq from "./assets/images/groq.png";
import node from "./assets/images/node.png";
import api from "./assets/images/api.png";

import chandan from "./assets/images/chandan.webp";
import dt from "./assets/images/dt.webp";

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
        url;
        const response = await response_mid.json();
        response;
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
      error;
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
      error.message;
    }
  }

  return (
    <div className="">
      <div className="relative z-50 bg-white min-h-screen w-full bg-white p-2 px-20">
      {/* Header */}
        <div className="w-full h-fit   flex text-center my-auto items-center pt-5 justify-center  ">
          <ul className="w-[35%] text-sm h-full p-3 items-center rounded-xl flex justify-around bg-gradient-to-r from-[#E4F9F7] to-[#FEEBE2] ">
            <Link className="cursor-pointer" to="Home" smooth duration={500}>
              Home
            </Link>
            <Link className="cursor-pointer" to="Tech" smooth duration={500}>
              Tech
            </Link>
            <Link className="cursor-pointer" to="Demo" smooth duration={500}>
              Demo
            </Link>
            <Link className="cursor-pointer" to="Team" smooth duration={500}>
              Team
            </Link>
          </ul>
        </div>

        {/* Hero Section */}
        <div
          id="Home"
          name="Home"
          className=" h-fit w-full flex gap-2 px-10 justify-center mt-10"
        >
          {/* Left Section */}
          <div className="w-[60%]  px-10 tracking-wide text-start ">
            <div className="mt-10  text-[#2C2C2C] font-semibold text-md mt-20 ms-1">
              Get personalized advice on your social media posts.
            </div>
            <div className="text-6xl font-bold my-3 text-[#84AEA8]">
              Social <span className="text-[#F0B295]">copilot</span>
            </div>
            <div className="text-[#3C3C3C] text-md ms-1">
              An AI powered social media analyzer Leverage AI capabilities
              <br />
              to get more engagement of your social media posts.
            </div>
            <div className="text-[#3C3C3C] text-md mt-5 ms-1">
              Social Co-Pilot is an AI application to get analytics and insights
              from your social media accounts using AI. In this app we have used
              the Gen-AI platform Langflow and ASTRADB database
            </div>

            <div className="text-[#2C2C2C] w-full  mt-20 ms-1 text-xl font-bold">
              Gen AI App
            </div>
          </div>
          {/* Right Section */}
          <div className="w-[40%]  relative">
            <Spline scene="https://prod.spline.design/u7CKJcoHElGiDYoh/scene.splinecode" />
            <div className="bg-[#fff] h-[80px] w-full absolute bottom-0 left-0"></div>
          </div>
        </div>

        {/* Tech Used Section */}

        <div
          id="Tech"
          name="Tech"
          className="h-[80vh] w-full  gap-2 px-[5vw] pt-10 mt-20 "
        >
          <div className="maincontainer grid grid-cols-4 gap-4 ">
            <div className="text-center my-auto  font-cramble text-6xl">
              Tech <br />
              Used
            </div>
            <div className="h-[30vh] text-center bg-[#F4F8D3] rounded-[20px]">
              <img className="h-[30%] mx-auto" src={reactlogo} />
              <img className="h-[70%] mx-auto" src={macintosh} />
            </div>
            <div className="h-[30vh] text-center bg-[#FFEAEA] rounded-[20px] py-auto">
              <img className="h-[30%] mx-auto " src={node} />
              <img className="h-[70%] p-8 mx-auto " src={serverrack} />
            </div>
            <div className="h-[30vh] text-center bg-[#E4F2FE] rounded-[20px]">
              <img
                className="h-[30%] w-[60%] object-contain mx-auto"
                src={tailwind}
              />
              <img className="h-[70%] p-12 mx-auto" src={painbrush} />
            </div>
            {/* Second div */}
            <div className="h-[30vh] col-span-2 border-2 font-cramble text-4xl bg-[#EBE5C2] flex rounded-[20px] justify-between px-20">
              <div className="h-full flex flex-col justify-center gap-4">
                <img className="w-[50%] h-auto object-contain" src={groq} />
                <p className="text-lg font-serif">Groq is Fast AI Inference</p>
              </div>
              <img className="w-[20%] h-auto object-contain" src={api} />
            </div>

            <div className="h-[30vh] col-span-2 border-2 font-cramble text-4xl bg-[#FFF2DB] flex rounded-[20px] justify-between px-20">
              <div className="h-full flex flex-col justify-center gap-4">
                <img className="w-[60%] h-auto object-contain" src={langflow} />
                <p className="text-lg font-serif ms-2">GenAI platform</p>
              </div>
              <img className="h-[100%] h-auto object-contain" src={langchain} />
            </div>
          </div>
        </div>

        {/* Main chat section */}
        <div id="Demo" name="Demo" className=" h-[100vh] mt-5 px-6  w-full ">
          <div className="font-cramble ms-2 text-4xl">Demo</div>
          <div className=" h-[90vh] w-full p-2">
            <div className="chat-diaglog h-full w-full border-4  border-[#EEEEEE]  rounded-[20px] bg-white relative ">
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
              <div className="chat-footer w-full h-fit  flex flex-col  items-center justify-center py-6 f-fit  absolute bottom-0 ">
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
        {/* <div className="lg:h-[30vh] px-6">
        <div className=" h-full w-full lg:flex flex flex-col lg:flex-row  lg:flex-wrap justify-around pt-20 px-10">
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
      </div> */}

        {/* Team */}
        <div
          id="Team"
          name="Team"
          className="w-full h-[100vh]  mt-40 px-6 py-5"
        >
          <div className="font-cramble ms-2 text-4xl">Team</div>
          <div className="flex gap-10">
            <div className="mt-20">
              <div className="w-fit h-fit flex flex-col border-2  gap-2 rounded-[20px] ">
                <div className="h-[30vh] w-[18vw]  bg-[#7FA1C3] rounded-tl-[20px] rounded-tr-[20px]  ">
                  <img
                    className="w-[50%]  object-contain mx-auto mt-10   "
                    src={chandan}
                  />
                </div>
                <div className="px-5 py-2">
                  <p className="font-cramble tracking-wide text-left">
                    Chandan Suthar
                  </p>
                  <p className="font-cramble tracking-wide text-sm text-[#6D6D6D] text-left">
                    Fullstack Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="w-fit h-fit flex flex-col  gap-2 rounded-[20px] border-2">
                <div className="h-[30vh] w-[18vw]  bg-[#AFF382] rounded-tl-[20px] rounded-tr-[20px] ">
                  <img
                    className="w-[50%]  object-contain mx-auto mt-10   "
                    src={dt}
                  />
                </div>
                <div className="px-5 py-2">
                  <p className="font-cramble tracking-wide text-left">
                    Dhaval Tarkhala
                  </p>
                  <p className="font-cramble tracking-wide text-sm text-[#6D6D6D] text-left">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
