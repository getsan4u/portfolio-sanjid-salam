import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ 
      fontSize: "1.3rem", 
      color: "var(--aqua-accent)",
      fontFamily: "'Fira Code', monospace"
    }}>
      <Typewriter
        options={{
          strings: [
            "specialising in secure, automated AWS platforms",
            "building scalable cloud infrastructure",
            "automating deployments with Terraform & Kubernetes",
            "implementing DevSecOps best practices",
            "optimising cloud costs & performance",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 50,
        }}
      />
    </div>
  );
}

export default Type;
