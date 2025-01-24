import React from "react";
import { Inner, Wrapper, TextWrapper, ImageWrapper, Header } from "./styled";
import Image from "../../UI/Image";
import Label from "../../UI/Label";

const Solutions = () => (
  <div>
    <Header>
      <Label
        dangerouslySetInnerHTML={{
          __html:
            "Agile <span>Server</span> Solutions For<br/> Dynamic Business Needs",
        }}
        margin={"120px 0 10px"}
      />

      <p>Here are two of the key server solutions for businesses:</p>
    </Header>

    <Wrapper>
      <Inner>
        <TextWrapper>
          <div>
            <h3>Advanced Cloud Integration</h3>
            <p>
              We integrate your server infrastructure with the cloud for
              flexible, cost-effective scalability, optimizing performance with
              hybrid solutions.
            </p>
          </div>
          <div>
            <h3>Benefits</h3>
            <p>
              <b>Flexibility:</b> Easily scale resources up or down based on
              demand.
              <br />
              <br />
              <b>Cost-Effectiveness:</b> Optimise costs by leveraging both
              on-premises and cloud resources efficiently.
              <br />
              <br />
              <b>Scalability:</b> Scale your infrastructure seamlessly to handle
              peak workloads and growth.
            </p>
          </div>
        </TextWrapper>

        <ImageWrapper>
          <Image
            filename={"server-page/Cloud-Computing.png"}
            alt="Agile server solution"
            style={{ maxHeight: 470 }}
            styleImg={{ maxHeight: 470 }}
          />
        </ImageWrapper>
      </Inner>
      <Inner>
        <TextWrapper>
          <div>
            <h3>Microservices Architecture</h3>
            <p>
              We use microservices architecture for agile, resilient application
              development, breaking down applications into modular services to
              quickly adapt to business needs and reduce downtime.
            </p>
          </div>
          <div>
            <h3>Benefits</h3>
            <p>
              <b>Agility:</b> Develop and deploy services independently,
              allowing faster iteration and adaptation to changing business
              needs.
              <br />
              <br />
              <b>Resilience:</b> Isolate failures and minimize downtime by
              decoupling services.
              <br />
              <br />
              <b>Maintainability:</b> Enhance and update services without
              disrupting the entire application, improving overall system
              stability.
            </p>
          </div>
        </TextWrapper>

        <ImageWrapper>
          <Image
            filename="Cloud-Computing-2.png"
            alt="Agile server solution"
            style={{ maxHeight: 630 }}
            styleImg={{ maxHeight: 630 }}
          />
        </ImageWrapper>
      </Inner>
    </Wrapper>
  </div>
);

export default Solutions;
