import React from 'react'

function ApolloScript() {

    const scriptContent = `
    function initApollo() {
      var n = Math.random().toString(36).substring(7),
          o = document.createElement("script");
      o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
      o.async = !0;
      o.defer = !0;
      o.onload = function() {
        window.trackingFunctions.onLoad({ appId: "679885af96e4bc03ed3a7ef7" });
      };
      document.head.appendChild(o);
    }
    initApollo();
  `;

    return (
        <>
            <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h5>Apollo Script</h5>
                    <button className='btn btn-primary' type='button'>Copy Code</button>
                </div>
                <hr />
                <div>
                    <p style={{ textAlign: 'left', paddingLeft: '20px', letterSpacing: '1px' }}> <strong>1.</strong> Copy the script using the <strong>copy code</strong> button and insert it into Google Tag Manager (GTM).</p>
                </div>
                <div>
                    <p style={{ textAlign: 'left', paddingLeft: '20px', letterSpacing: '1px' }}> <strong>2.</strong> If GTM is not used, manually include the script just before the head tag in your website's HTML.</p>
                </div>
                <div>
                    <p style={{ textAlign: 'left', paddingLeft: '20px', letterSpacing: '1px' }}> <strong>3.</strong> Verify the script remains unaltered before publishing.</p>
                </div>
                <div>
                    <p style={{ textAlign: 'left', paddingLeft: '20px', letterSpacing: '1px' }}> <strong>4.</strong> Inspect your website for any script errors. </p>
                </div>
                <div>
                    <p style={{ textAlign: 'left', paddingLeft: '20px', letterSpacing: '1px' }}> <strong>5.</strong> <strong>Finally, navigate to a page on your website</strong> then revisit Apollo's settings to test the connection and ensure the status becomes active.</p>
                </div>


                <div style={{ backgroundColor: '#F7F7F7', padding: '20px' }}>
                    <pre>
                        <code>{scriptContent}</code>
                    </pre>
                </div>

            </div>
        </>
    )
}

export default ApolloScript