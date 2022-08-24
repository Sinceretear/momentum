import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './index.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import getBg from './functions/LockFunctions';

const App = () => {
  const [result, setResult] = useState([]);
  
  useEffect(() => { 
      //   fetch("https://www.google.com/feed-api/async/twdl?pf=y&vet=10ahUKEwjo_bTOisz5AhXKIDQIHaBnBRoQ77QCCB0..i&ei=W-77YqjkJMrB0PEPoM-V0AE&yv=3&dpr=2&bih=744&biw=320&cs=1&async=_fmt:prog,_id:_W-77YqjkJMrB0PEPoM-V0AE2", {
      // "headers": {
      //   "accept": "*/*",
      //   "accept-language": "en-US,en;q=0.9",
      //   "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
      //   "sec-ch-ua-arch": "",
      //   "sec-ch-ua-bitness": "\"64\"",
      //   "sec-ch-ua-full-version": "\"103.0.5060.114\"",
      //   "sec-ch-ua-full-version-list": "\".Not/A)Brand\";v=\"99.0.0.0\", \"Google Chrome\";v=\"103.0.5060.114\", \"Chromium\";v=\"103.0.5060.114\"",
      //   "sec-ch-ua-mobile": "?1",
      //   "sec-ch-ua-model": "\"Nexus 5\"",
      //   "sec-ch-ua-platform": "\"Android\"",
      //   "sec-ch-ua-platform-version": "\"6.0\"",
      //   "sec-ch-ua-wow64": "?0",
      //   "sec-fetch-dest": "empty",
      //   // "sec-fetch-mode": "cors",
      //   "sec-fetch-site": "same-origin",
      //   "x-client-data": "CIy2yQEIpLbJAQjBtskBCKmdygEIk43LAQiWocsBCNvvywEI5KfMAQjfrMwBCO+5zAEIuLrMAQj6uswBCIq7zAEIxb/MARirqcoB",
      //   "cookie": "CONSENT=YES+US.en+20180128-05-1; OTZ=6634003_84_88_104280_84_446940; SEARCH_SAMESITE=CgQIk5YB; NID=511=E5L-3BfOy2mt-sKKOnZ4-vV91yTFSmM3w430OJjJNuV-W1hnMn2xPxxq7T-Whv_ZljHaKOO_7ftgRdUfTWvTZkY73EYeESPY7miifnX3bwJxdTM4BnrltlcLWv7Te5ZNXEukJjkdqz6qQJoQj3oHYaAcTYr2r4D2mEa6z0efs5_Eosfw8vM2yV_i_favtXMIPUBXpHWeGRV54aP5RkPvNqQvCXRS1mBB1t9stGsY7VCitjJmmeXWKWveY6Q_7CnwNAqMygpq35HRNujjqV0Tp7X7beCnrN0-qsMcPsmXRg7sra73B4ZrWX93dDtlXaRzM06sbeSP6EYlrcJh-SCwVgX7t1LYYnq23aTO8qKWv_FkMpohOFhk1KQ6hxGrF8SVkJWuCmQxNfTX-H7h6KARFyA9v9bGal1r796KWHIXSY4dsm0S7ke3opaL-26XEYIQ7Tp7MOvK7BiD6G9nCylOdGNl1gryZAoL5COL7tl_NlqY-sDgYrmLqtHjnOMGMO4b0lg; SID=NQgMKuyDb0ZjGPOwz3b1aNZsol8LCK33c4CWwHLpx9K4kFzbmwIVV4MMoe-xYCpa2ojzOQ.; __Secure-1PSID=NQgMKuyDb0ZjGPOwz3b1aNZsol8LCK33c4CWwHLpx9K4kFzbKkHubUGoZTR_Cg-mIOrKgg.; __Secure-3PSID=NQgMKuyDb0ZjGPOwz3b1aNZsol8LCK33c4CWwHLpx9K4kFzbvHnO64wHhOzC-XuMUlvs8A.; HSID=AISr_tmEwgCvoNLQV; SSID=AW5-FoUbU-y2th2j-; APISID=5Pfg0ovqWguXaoe3/At4bIcCGtQAE04n2L; SAPISID=aeNZ1dahfSIrZVsz/ALjO-0w7lPCf3xCJp; __Secure-1PAPISID=aeNZ1dahfSIrZVsz/ALjO-0w7lPCf3xCJp; __Secure-3PAPISID=aeNZ1dahfSIrZVsz/ALjO-0w7lPCf3xCJp; 1P_JAR=2022-08-16-19; SIDCC=AEf-XMTDAmehpzaq8uHNRN_MfenMXpTxoZwF25wuIj8gewtyqRWojEBiAPZaDnsl9j2_eYRHNPc; __Secure-1PSIDCC=AEf-XMRDsKsYDRrp00UPtggJm7XBm8qqTaOZhzzm3IPtwfaDmqkHqYcZ2p2KlCocx9QdoSnbyas; __Secure-3PSIDCC=AEf-XMRs343fx0dmAFErwm7uIvqPgyUKWO1e8_54n9zGWJreOQUA2ZsxdpeBYqvsEkwXDIwj6AnP",
      //   "Referer": "https://www.google.com/",
      //   "Referrer-Policy": "origin"
      // },
      // "body": null,
      // "method": "GET"
      // })
      // .then(response => console.log(response.json()));

    const isLocked = localStorage.getItem('locked') === 'true';
    if (isLocked) {
      // get from cache 
      const url = localStorage.getItem('bg')
      const title = JSON.parse(localStorage.getItem('imageName'));
      const data = [url, title]
      setResult(data);
    } else {
      // get new image and set to cache
      getBg().then((response) => {
        const urlForBg = response.data.urls.full
        const title = response.data.location.title
        const data = [urlForBg, title]
        localStorage.setItem("bg", JSON.stringify(urlForBg));
        localStorage.setItem("imageName", JSON.stringify(title));
        setResult(data);
      });
    }

  }, [])


  return (
    
    <div className="min-h-screen" style={{ backgroundImage: `url(${result[0]})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', Position: 'relative' }}>
      <Navbar />
      <MainContent location={result[1]} />
    </div>

  );
}

export default App;
