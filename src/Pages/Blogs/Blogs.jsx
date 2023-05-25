import React, { useRef } from "react";
import "./Blogs.css";
import { Container } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import Pdf from "react-to-pdf";
import { createRef } from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FaDownload } from "react-icons/fa";

const Blogs = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'portrait ',
        unit: 'in',
        format: [9,16]
    };

  return (
    
    <div>
        <div className="blog-title">
           <h1  >Blog Page</h1>

            <Pdf targetRef={ref}  options={options} filename="Blogs.pdf"  x={0.5} y={0.5} scale={0.5}>
                {({ toPdf }) => <button className="btn btn-primary" onClick={toPdf}>Download Pdf <FaDownload/> </button>}
            </Pdf>       
        </div>

      <div>
        <div ref={ref} className="blogs">
                <div>
                    <h1 className="blogTitle">Answer of Question</h1>
                </div>
                <table className="Answer">
                <thead>
                    <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td className="qsn">
                        i. Tell us the differences between uncontrolled and controlled
                        components.
                    </td>
                    <td className="ans">
                        <ol>
                        <li>
                            State Management:
                            <ul>
                            <li>
                                In controlled components, the state of the component is
                                managed by a parent or a top-level state manager like
                                Redux, and the current value of the component is passed
                                down as a prop.
                            </li>
                            <li>
                                In uncontrolled components, the component manages its
                                own internal state, which is not directly manipulated by
                                React.
                            </li>
                            </ul>
                        </li>
                        <li>
                            Data Flow:
                            <ul>
                            <li>
                                In controlled components, data flows from the parent
                                component to the child component through props, and
                                changes are communicated back to the parent through
                                callbacks.
                            </li>
                            <li>
                                In uncontrolled components, data flows from the DOM to
                                the component through refs, and changes to the component
                                state are handled by the component itself.
                            </li>
                            </ul>
                        </li>

                        <li>
                            Complexity:
                            <ul>
                            <li>
                                Controlled components are generally more complex to
                                implement than uncontrolled components, because they
                                require more state management and data flow management.
                            </li>
                            <li>
                                Uncontrolled components are simpler to implement, but
                                can be harder to reason about and can lead to unexpected
                                behavior if the component's state becomes out of sync
                                with the rest of the application.
                            </li>
                            </ul>
                        </li>
                        </ol>
                    </td>
                    </tr>

                    <tr>
                    <td className="qsn">
                        ii. How to validate React props using PropTypes?
                    </td>
                    <td className="ans">
                        <ul>
                        <li>
                            To use PropTypes, we need to import it from the 'prop-types'
                            module and then define a propTypes object on the component.
                        </li>
                        <li>
                            The propTypes object maps the names of the props to their
                            respective PropTypes validators, which can be one of many
                            types such as string, number, bool, array, object, and more.
                        </li>
                        <li>
                            PropTypes also allows us to specify whether a prop is
                            required or not using the <b>isRequired</b> modifier.
                        </li>
                        </ul>
                    </td>
                    </tr>

                    <tr>
                    <td className="qsn">
                        iii. Tell us the difference between nodejs and express js
                    </td>
                    <td className="ans">
                        <ul>
                        <li>
                            Node.js is a runtime environment for running JavaScript on
                            the server-side, while Express.js is a web application
                            framework that runs on top of Node.js.
                        </li>
                        <li>
                            Node.js provides a set of core modules and APIs for
                            low-level tasks, while Express.js provides higher-level
                            abstractions and features for building web applications.
                        </li>
                        <li>
                            Node.js can be used to build various types of applications,
                            while Express.js is designed specifically for building web
                            applications
                        </li>
                        <li>
                            Node.js requires more code to achieve basic functionality,
                            while Express.js provides a more streamlined and
                            developer-friendly way to build web applications.
                        </li>
                        </ul>
                    </td>
                    </tr>

                    <tr>
                    <td className="qsn">
                        iv.What is a custom hook, and why will you create a custom hook?
                    </td>
                    <td className="ans">
                        <b className="customHook">
                        A custom hook is a reusable function in React that
                        encapsulates complex logic that can be shared across multiple
                        components.
                        </b>{" "}
                        <br />
                        <small className="fw-bold">
                        why will I create a custom hook?
                        </small>
                        <ul>
                        <li>
                            Custom hooks allow developers to separate logic from
                            presentation components and promote code reuse and
                            modularity.
                        </li>
                        <li>
                            Developers can create custom hooks to handle specific tasks,
                            such as fetching data, managing state, or handling side
                            effects.
                        </li>
                        <li>
                            Custom hooks can be shared across different components or
                            even across different projects, making them a powerful tool
                            for improving code maintainability and reducing duplication.
                        </li>
                        <li>
                            Overall, custom hooks are a useful abstraction that can make
                            code more modular, reusable, and easier to understand and
                            maintain.
                        </li>
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
         </div>
      </div>
    </div>
  );
};

export default Blogs;
