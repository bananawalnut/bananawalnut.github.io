import{g as E,o as h,f as p}from"./local-yahoos-ve-50nHm.js";/* empty css               */const i=document.querySelector("#app");if(!i)throw new Error("Missing #app");i.innerHTML=`
  <main class="shell yahoo-page leaderboard-page">
    <nav class="topbar yahoo-nav">
      <a class="brand" href="/"><span class="brand-orb"><img src="/neal-token.png" alt="" /></span><span>NEAL</span><small>THE TABLES</small></a>
      <div class="nav-links"><a href="/yahoos/">Yahoos</a><a class="active" href="/leaderboards/">Leaderboards</a><a href="/#community-vote">Vote</a><a href="/#verify">Proof</a></div>
      <a class="wallet-button" href="/#wallet-identity">CONNECT WALLET</a>
    </nav>

    <header class="leaderboard-hero">
      <div><p class="eyebrow">LOCAL YAHOOS / FREE FOR NOW</p><h1>YOUR BIGGEST<br><em>YAHOOS.</em></h1></div>
      <aside><span>RECORD SCOPE</span><strong id="board-state">THIS BROWSER</strong><small id="board-slot">SAVED ON THIS DEVICE</small></aside>
    </header>

    <section class="leaderboard-grid">
      <article class="leaderboard-card total-board">
        <header><div><span>THIS BROWSER'S CARRY-ON</span><h2>MOST LOCAL YAHOOS</h2></div><b>∞</b></header>
        <ol id="total-board"><li class="empty-row">NO LOCAL YAHOOS YET</li></ol>
      </article>
      <article class="leaderboard-card speed-board">
        <header><div><span>THE THREE-YAHOO SPRINT</span><h2>FASTEST LOCAL 3-YAHOO STREAK</h2></div><b>3×</b></header>
        <ol id="speed-board"><li class="empty-row">NO LOCAL STREAK YET</li></ol>
      </article>
      <article class="leaderboard-card rate-board">
        <header><div><span>ROLLING 60-SECOND LOCAL RECORD</span><h2>LOCAL TOP SPEED</h2></div><b>60s</b></header>
        <ol id="rate-board"><li class="empty-row">NO LOCAL SPEED YET</li></ol>
      </article>
    </section>

    <section class="leaderboard-method">
      <p class="eyebrow">HOW THE BLOODY THING WORKS FOR NOW</p>
      <h2>LOCAL RACKET.<br>ZERO TOKENS.</h2>
      <div>
        <p><strong>MOST LOCAL YAHOOS</strong> counts every free button smash saved by this browser.</p>
        <p><strong>FASTEST LOCAL THREE</strong> measures the browser time between your first and third consecutive local YAHOO.</p>
        <p><strong>LOCAL TOP SPEED</strong> is your biggest burst inside any rolling 60-second window, shown as YAHOOS/MIN.</p>
        <p><strong>NO BULLSHIT</strong> these records are local, not verified, not global, and not on-chain. Future rules remain undecided.</p>
      </div>
      <a href="/yahoos/">BACK TO THE BIG RED BUTTON ↗</a>
    </section>

    <footer><span>NEAL / GOOD CUNT</span><span>LOCAL BROWSER RECORD · NOT ON-CHAIN</span></footer>
  </main>
`;const r=e=>{const t=document.querySelector(`#${e}`);if(!t)throw new Error(`Missing #${e}`);return t},S=e=>e==="THIS BROWSER"?e:e.length>16?`${e.slice(0,7)}…${e.slice(-7)}`:e;function s(e,t,n){if(e.replaceChildren(),!t.length){const a=document.createElement("li");a.className="empty-row",a.textContent=n,e.append(a);return}for(const a of t){const o=document.createElement("li"),l=document.createElement("b"),d=document.createElement("span"),c=document.createElement("strong");l.textContent=a.rank.toString().padStart(2,"0"),d.textContent=S(a.address),c.textContent=a.value,o.append(l,d,c),e.append(o)}}function O(e){r("board-state").textContent="THIS BROWSER",r("board-slot").textContent=e.lastAt?`LAST YAHOO ${new Date(e.lastAt).toLocaleTimeString()}`:"NO LOCAL YAHOOS YET",s(r("total-board"),e.total?[{rank:1,address:"THIS BROWSER",value:`${e.total.toLocaleString()} YAHOOS`}]:[],"NO LOCAL YAHOOS YET"),s(r("speed-board"),e.fastestThreeMs===null?[]:[{rank:1,address:"THIS BROWSER",value:p(e.fastestThreeMs)}],"NO LOCAL STREAK YET"),s(r("rate-board"),e.peakPerMinute?[{rank:1,address:"THIS BROWSER",value:`${e.peakPerMinute} YAHOOS/MIN`}]:[],"NO LOCAL SPEED YET")}async function L(){try{const e=await fetch("/launch-record.json",{cache:"no-store"});if(!e.ok)throw new Error(`Launch record returned ${e.status}`);const t=await e.json();if(t.schema!=="neal.public-record/v1")throw new Error("Unsupported launch record schema");if(t.programs.yahoos?.localMode?.enabled&&t.programs.yahoos.localMode.price==="free"){O(E()),h(O);return}const n=await fetch("/yahoo-leaderboard.json",{cache:"no-store"});if(!n.ok)throw new Error(`Leaderboard returned ${n.status}`);const a=await n.json();if(a.schema!=="neal.yahoo-leaderboard/v1")throw new Error("Unsupported leaderboard schema");r("board-state").textContent=a.programId?a.status.replaceAll("_"," ").toUpperCase():"PRE-LAUNCH",r("board-slot").textContent=a.asOfSlot?`FINALIZED THROUGH SLOT ${a.asOfSlot}`:"NO FINALIZED SLOT YET",s(r("total-board"),a.totalYahoos.map(o=>({rank:o.rank,address:o.address,value:`${o.totalYahoos} YAHOOS`})),"NO ON-CHAIN YAHOOS YET"),s(r("speed-board"),a.fastestConsecutiveYahoos.map(o=>({rank:o.rank,address:o.address,value:`${o.elapsedSlots} SLOTS`})),"NO VERIFIED STREAKS YET"),s(r("rate-board"),(a.peakYahooRate??[]).map(o=>({rank:o.rank,address:o.address,value:`${o.yahoosInWindow} YAHOOS/MIN`})),"NO VERIFIED SPEED YET")}catch(e){console.error(e),r("board-state").textContent="RECORD OFFLINE"}}L();
