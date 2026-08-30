import{o as O,g as d,f as h,r as y}from"./local-yahoos-ve-50nHm.js";/* empty css               */const p=document.querySelector("#app");if(!p)throw new Error("Missing #app");p.innerHTML=`
  <main class="shell yahoo-page">
    <nav class="topbar yahoo-nav">
      <a class="brand" href="/"><span class="brand-orb"><img src="/neal-token.png" alt="" /></span><span>NEAL</span><small>YAHOO YARD</small></a>
      <div class="nav-links"><a class="active" href="/yahoos/">Yahoos</a><a href="/leaderboards/">Leaderboards</a><a href="/#community-vote">Vote</a><a href="/#verify">Proof</a></div>
      <a class="wallet-button" href="/#wallet-identity">CONNECT WALLET</a>
    </nav>

    <header class="yahoo-page-hero">
      <p class="eyebrow">THE OFFICIAL LOCAL CARRY-ON</p>
      <h1>YAHOO!<br><em>YAHOO!</em><br>YAHOO!</h1>
      <div class="yahoo-hero-rule"><strong>ALL FREE.</strong><span>THIS BROWSER. RIGHT NOW.</span></div>
      <p>No wallet. No token. No daily cap. Smash the button and this browser remembers the racket. Future on-chain rules are still up for decision.</p>
      <a href="#yahoo-console">GET TO THE BIG RED BUTTON ↓</a>
    </header>

    <section class="yahoo-console-page" id="yahoo-console" aria-labelledby="yahoo-console-title">
      <div class="yahoo-console-copy">
        <p class="eyebrow">YOUR LOCAL RACKET</p>
        <h2 id="yahoo-console-title">LET ONE<br>RIP.</h2>
        <p id="yahoo-program-copy">Checking the local YAHOO switch…</p>
        <div class="yahoo-metrics">
          <article><span>PRICE</span><strong>FREE</strong></article>
          <article><span>YOUR LOCAL TOTAL</span><strong id="yahoo-local-total">0</strong></article>
          <article><span>FASTEST LOCAL THREE</span><strong id="yahoo-local-streak">—</strong></article>
          <article><span>LOCAL TOP SPEED</span><strong id="yahoo-local-rate">— / MIN</strong></article>
        </div>
      </div>
      <div class="yahoo-button-board">
        <span id="yahoo-program-state">CHECKING LOCAL MODE</span>
        <button id="yahoo-action" type="button" disabled>YAHOO!</button>
        <p id="yahoo-action-status" role="status">Getting the local racket ready…</p>
        <a href="/leaderboards/">OPEN YOUR LOCAL TABLES ↗</a>
      </div>
    </section>

    <section class="yahoo-rules">
      <article><b>01</b><h2>FREE AS A BIRD.</h2><p>Every local YAHOO is free for now. No wallet prompt, no transaction, no sneaky token charge.</p></article>
      <article><b>02</b><h2>LIVES IN YOUR BROWSER.</h2><p>Your racket stays on this device. Clear the site's browser data and the local record goes with it.</p></article>
      <article><b>03</b><h2>CLIMB YOUR TABLE.</h2><p>Chase your local total, fastest three-YAHOO streak, and biggest 60-second burst. Global and on-chain rules come later—if the mob wants them.</p></article>
    </section>

    <section class="yahoo-mini-tables">
      <header><div><p class="eyebrow">LIVE FROM THIS BROWSER</p><h2>TOP OF THE YAP.</h2></div><a href="/leaderboards/">FULL LOCAL TABLES ↗</a></header>
      <div class="yahoo-mini-grid">
        <article><h3>MOST LOCAL YAHOOS</h3><ol id="yahoo-total-preview"><li>NO LOCAL YAHOOS YET</li></ol></article>
        <article><h3>FASTEST LOCAL 3-YAHOO STREAK</h3><ol id="yahoo-fast-preview"><li>NO LOCAL STREAK YET</li></ol></article>
        <article><h3>LOCAL TOP SPEED</h3><ol id="yahoo-rate-preview"><li>NO LOCAL SPEED YET</li></ol></article>
      </div>
    </section>

    <footer><span>NEAL / GOOD CUNT</span><span id="yahoo-footer-state">LOCAL YAHOOS · FREE</span></footer>
  </main>
`;const o=e=>{const a=document.querySelector(`#${e}`);if(!a)throw new Error(`Missing #${e}`);return a},i=e=>e.length>10?`${e.slice(0,4)}…${e.slice(-4)}`:e;function s(e,a,n){e.replaceChildren();for(const r of a.length?a.slice(0,3):[n]){const t=document.createElement("li");t.textContent=r,e.append(t)}}function c(e){o("yahoo-local-total").textContent=e.total.toLocaleString(),o("yahoo-local-streak").textContent=h(e.fastestThreeMs),o("yahoo-local-rate").textContent=e.peakPerMinute?`${e.peakPerMinute} / MIN`:"— / MIN",s(o("yahoo-total-preview"),e.total?[`1. THIS BROWSER — ${e.total.toLocaleString()}`]:[],"NO LOCAL YAHOOS YET"),s(o("yahoo-fast-preview"),e.fastestThreeMs===null?[]:[`1. THIS BROWSER — ${h(e.fastestThreeMs)}`],"NO LOCAL STREAK YET"),s(o("yahoo-rate-preview"),e.peakPerMinute?[`1. THIS BROWSER — ${e.peakPerMinute}/MIN`]:[],"NO LOCAL SPEED YET")}function E(e){const a=e.programs.yahoos,n=o("yahoo-action");if(n.disabled=!0,!a)return o("yahoo-program-state").textContent="POLICY MISSING",o("yahoo-program-copy").textContent="No public on-chain YAHOO policy is available.",o("yahoo-action-status").textContent="Nothing can be submitted.",!1;if(a.localMode?.enabled&&a.localMode.price==="free")return o("yahoo-program-state").textContent="LOCAL MODE · FREE",o("yahoo-program-copy").textContent="Every YAHOO is free and saved only in this browser. The future on-chain setup is deliberately undecided.",o("yahoo-action-status").textContent="This makes a local browser record only. No wallet opens and nothing goes on-chain.",n.disabled=!1,n.textContent="LET ONE RIP",c(d()),!0;const r=a.acceptedPaymentAssets.map(t=>`${t.amountTokens} ${t.symbol}`).join(" or ");return o("yahoo-program-copy").textContent=`${a.dailyFreePerWallet} free per wallet per UTC day. After that: ${r}.`,e.status!=="launched"||!a.programId?(o("yahoo-program-state").textContent="PRE-LAUNCH",n.textContent="YAHOOS START AFTER LAUNCH",o("yahoo-action-status").textContent="The canonical mint, reviewed YAHOO program, and wallet transaction builder are not live yet. Nothing will be sent."):a.status!=="active"?(o("yahoo-program-state").textContent=a.status.replaceAll("_"," ").toUpperCase(),n.textContent="YAHOOS PAUSED",o("yahoo-action-status").textContent="The on-chain program is not accepting new YAHOOS."):(o("yahoo-program-state").textContent="BUILDER PENDING",n.textContent="TRANSACTION BUILDER PENDING",o("yahoo-action-status").textContent="The on-chain program exists, but the separately reviewed wallet builder is still required."),!1}let l=!1;o("yahoo-action").addEventListener("click",()=>{if(!l)return;c(y());const e=o("yahoo-action");e.textContent="YAHOO!",window.setTimeout(()=>{e.textContent="LET ANOTHER RIP"},260)});O(e=>{l&&c(e)});async function A(){try{const[e,a]=await Promise.all([fetch("/launch-record.json",{cache:"no-store"}),fetch("/yahoo-leaderboard.json",{cache:"no-store"})]);if(!e.ok||!a.ok)throw new Error("Public YAHOO records unavailable");const n=await e.json(),r=await a.json();if(n.schema!=="neal.public-record/v1"||r.schema!=="neal.yahoo-leaderboard/v1")throw new Error("Unsupported public record");l=E(n),l||(s(o("yahoo-total-preview"),r.totalYahoos.map(t=>`${t.rank}. ${i(t.address)} — ${t.totalYahoos}`),"NO ON-CHAIN YAHOOS YET"),s(o("yahoo-fast-preview"),r.fastestConsecutiveYahoos.map(t=>`${t.rank}. ${i(t.address)} — ${t.elapsedSlots} SLOTS`),"NO VERIFIED STREAKS YET"),s(o("yahoo-rate-preview"),(r.peakYahooRate??[]).map(t=>`${t.rank}. ${i(t.address)} — ${t.yahoosInWindow}/MIN`),"NO VERIFIED SPEED YET"),o("yahoo-footer-state").textContent=r.asOfSlot?`FINALIZED THROUGH SLOT ${r.asOfSlot}`:"PRE-LAUNCH · NO ON-CHAIN YAHOOS")}catch(e){console.error(e),o("yahoo-program-state").textContent="RECORD OFFLINE",o("yahoo-program-copy").textContent="Public YAHOO verification is unavailable. Do not submit anything."}}A();
