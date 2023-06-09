import React from "react";
import style from "./Form.module.css";
import { saveAs } from "file-saver";

const ResumeViewer: React.FC = () => {
  const pdfUrl =
    "https://www.dropbox.com/scl/fi/fxgk5ku494f6cixoos0zs/resume.pdf?dl=0&rlkey=njjkxnmya2qmtjeywawjsrjql";

  const downloadPdf = () => {
    saveAs(pdfUrl, "resume.pdf");
  };

  return (
    <div className={`container-lg mb-16 ${style.btn}`}>
      <button className="mb-8 font-bold font-mono sm-pdf" onClick={downloadPdf}>
        Download PDF
      </button>
      <div className="container shadow-2xl border sm-resume">
        <div className="font-serif my-20 mx-12">
          <p className="center font-bold text-2xl">Rashaad Jones</p>
          <p className="text-sm leading-6">
            <strong className="text-lg">EDUCATION:</strong>
            <br />{" "}
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">
                The University of North Carolina at Charlotte (UNCC) ,
                Charlotte, NC
              </p>
              <p>May 2023</p>
            </div>
            <br />
            <div className="flex justify-between -mb-6 ">
              <p className="">
                Bachelor of Science in Computer Science | Concentration:
                Software Engineering | Minor: Psychology
              </p>
            </div>
            <br /> Honors: Magna cum laude | Chancellor’s List: Fall 2020 and
            Spring 2022 | Dean’s List: Spring 2021, and Fall 2021 <br />{" "}
            Relevant Courses: Web App Design & Development; Network App
            Development; Database Design & Implementation
          </p>
          <hr />
          <p className="text-sm mb-4 leading-6">
            <strong className="text-lg">TECHNICAL SKILLS:</strong>
            <br />
            Skills: React, TypeScript, JavaScript, Java, Express.js, Bootstrap,
            Tailwind, Sass, MySQL, MongoDB, Scrum, Git, Node.js, Agile, jQuery,
            Front-end design, RESTful APIs, Express, Mongoose CRUD, APIs, HTML,
            CSS
          </p>
          <hr />
          <strong className="text-lg">RELEVANT PROJECT EXPERIENCE:</strong>
          <br />
          <p className="text-sm mb-4 leading-6">
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">Project 1: Rashaad's Portfolio</p>
              <p> May - June 2023</p>
            </div>
            <br />
            <ul>
              <li>
                {" "}
                + Developed an implemented a dynamic portfolio web application
                utilizing ReactJS, Node.js, and Express.
              </li>
              <li>
                {" "}
                + Designed and integrated a fully functional contact form page
                utilizing Nodemailer for seamless communication.
              </li>
              <li>
                + Utilized TypeScript, Sass, and Tailwind CSS to ensure
                maintainability, and responsive design resulting in an engaging
                and visually appealing user interface.
              </li>
            </ul>
          </p>
          <p className="text-sm mb-4 leading-6">
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">Project 2: RSVP Meetup Website</p>
              <p> January - May 2023</p>
            </div>
            <br />
            <ul>
              <li>
                + Created a responsive, visually appealing front-end design for
                the meet-up website using Bootstrap, implementing features such
                as grid layout.
              </li>
              <li>
                + Created a scalable server using Node.js and linked it with
                MongoDB using the MongoDB Atlas Cloud to develop a dynamic
                website.
              </li>
              <li>
                + Designed and implemented RESTful APIs using Express and
                Mongoose CRUD functionalities to enable seamless data exchange
                between the server and website, increasing website
                functionality.
              </li>
            </ul>
          </p>
          <p className="text-sm mb-4 leading-6">
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">Project 3: InTheLoop App</p>
              <p> January - April 2023</p>
            </div>
            <br />
            <ul>
              <li>
                + Successfully implemented a login system with password
                encryption to enhance user authentication and security,
                resulting in a streamlined login process.
              </li>
              <li>
                + Leveraged Google’s Maps API to design and develop innovative
                mapping solutions, enabling users to interact with geospatial
                data in real-time.
              </li>
              <li>
                + Collaborated with a team using the Agile methodology to
                deliver a high-quality application.
              </li>
            </ul>
          </p>
          <hr />
          <p className="text-sm leading-6">
            <strong className="text-lg">WORK EXPERIENCE:</strong> <br />
            <div className="flex justify-between -mb-4 font-bold">
              <p className="">Harris Teeter, Cashier, Cary, NC</p>
              <p> June 2017 – November 2019</p>
            </div>
            <br />
            <ul>
              <li>
                + Handled the cash register with speed and precision to make
                waiting lines for customers go faster.
              </li>
              <li>
                + Served customers with enthusiasm and politeness, resulting in
                praise from customers.{" "}
              </li>
              <li>
                + Educated new workers on how to work the cash register by
                explaining PLU numbers for produce and showing them how to carry
                out basic operations for the cash register.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
