import React from "react";
require("dotenv").config();

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="tawk"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/${process.env.GATSBY_TAWK_ID}/${process.env.GATSBY_TAWK_KEY}';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
          Tawk_API.onLoad = function() {
            
          };

          // Tawk_API.onChatMessageVisitor = function (message) {
          //   console.log('onChatMessageVisitor', message)
          // };

          Tawk_API.onChatStarted = function (message) {
            typeof window !== "undefined" &&
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-11470082789/tB-1CNCYmL8ZEOWlrt0q',
                  'event_callback': function() {
                    console.log('Event sent successfully');
                  }
                });
          };
        `,
      }}
    />,
    <script
      id="linkedin_analytics"
      key="linkedin_analytics"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          _linkedin_partner_id = "6292610";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `,
      }}
    />,
    <script
      id="linkedin_analytics_script"
      key="linkedin_analytics_script"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";
          b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);
        })();
      `,
      }}
    />,
    <noscript
      id="linkedin_analytics_noscript"
      key="linkedin_analytics_noscript"
      dangerouslySetInnerHTML={{
        __html: `
          <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=6292610&fmt=gif" />
        `,
      }}
    />,
  ]);
};
