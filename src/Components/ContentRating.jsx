import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
    };
  }
  render() {
    return (
      <>
        <h1>Text Content Rating</h1>
        <div className="content-rating">
          <p>
            Tesfahun Fola is a dedicated Software Engineering student at African
            Leadership University with a strong foundation in web and full-stack
            development. Tesfahun combines technical expertise in languages such
            as JavaScript, Python, HTML, and CSS with a knack for front-end
            frameworks like React to create dynamic, user-friendly applications.
            As a Teaching Assistant at Catholic Community Service, Tesfahun
            excels in mentoring and tutoring students, simplifying complex
            topics, and providing support to enhance academic and technical
            outcomes. Fluent in Amharic and English, with intermediate
            proficiency in Italian, Tesfahun embraces cultural diversity in
            problem-solving and collaboration. Driven to continuously learn and
            contribute, Tesfahun is building a career at the intersection of
            technology and education to develop impactful, scalable solutions.
          </p>
          <div className="rating-buttons">
            <button className="like-button" onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button
              className="dislike-button"
              onClick={this.state.handleDislike}
            >
              Dislike ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </>
    );
  }
}
export default ContentRating;
