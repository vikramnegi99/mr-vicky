/* ===== CONFIG ===== */
var CHANNEL_ID='UCiwp7wlNdKPeFheEvqJFsIg';
var CHANNEL_URL='https://youtube.com/@mrvickymoney';
var BANNER='https://res.cloudinary.com/acqrwkcn/image/upload/v1788937314/file_000000009b548211bd6483b2dd13d99d.png';
var PROFILE='https://res.cloudinary.com/acqrwkcn/image/upload/v1788937188/1000124621.png';

/* ===== FALLBACK VIDEOS (rendered instantly, replaced by live data) ===== */
var FALLBACK_VIDEOS=[
{id:'M5IOEtXXpOI',title:'I Made ₹75,000+ with Google Books Using FREE AI!',url:'https://www.youtube.com/watch?v=M5IOEtXXpOI',published:'2026-09-13T03:27:35+00:00',views:2,likes:1},
{id:'9RzWDVzXGi0',title:'Motion Designers Will HATE This Video...',url:'https://www.youtube.com/watch?v=9RzWDVzXGi0',published:'2026-09-09T03:08:28+00:00',views:25,likes:1},
{id:'P66FuHv69wg',title:'I Tried BILIBILI app for earning Money',url:'https://www.youtube.com/watch?v=P66FuHv69wg',published:'2026-09-05T09:54:05+00:00',views:140,likes:2},
{id:'6b3WhkzwP-o',title:'How to earn ₹5000 per WEEK with the help of Meesho Affiliate',url:'https://www.youtube.com/watch?v=6b3WhkzwP-o',published:'2026-09-03T03:27:36+00:00',views:5701,likes:63},
{id:'tI3PHQt16xw',title:'Dangerously become a SELF-EDUCATED',url:'https://www.youtube.com/watch?v=tI3PHQt16xw',published:'2026-08-29T06:30:23+00:00',views:20,likes:0}
];

/* ===== AI PROMPTS (keyed by video ID — add new prompts here anytime) ===== */
var PROMPTS={
'9RzWDVzXGi0':{items:[
{label:'Video Analysis Prompt',text:'Analyze this video scene by scene and generate detailed Ai video prompt for each shot/frame including camera angles, subject actions, lighting, environment, facial expressions, composition, transitions and cinematic style. Make the prompts accurate enough to recreate the video as close as possible. Make sure to include the exact texts in the video into the prompt.'},
{label:'Audio & Negative Prompt',text:'Use Professional sound effect design.\nNegative prompts: Do not include voice-over, Speech, or background music in the video. (If it has voice-over, speech, or background music, do not generate.)'},
{label:'Script Adaptation Prompt',text:'I want you to repurpose the video animation. I want you to change the 3D assets and elements in the animation and use assets and elements that suit and are relevant to this new narration script: ["AI isn\'t coming - it\'s already here, reshaping how we work, create, and think. Every industry is shifting. Every skill is evolving. Think about the best professionals; they adapt constantly and grow with the tools. Those who adapt will lead; those who resist will struggle to keep up. This isn\'t about replacing humans - it\'s about amplifying what we can do. The future favors the adaptable. Start now."].'}
]},
'P66FuHv69wg':{items:[
{label:'App Review Prompt',text:'Review this mobile app in detail. Cover the following aspects: 1) What is this app and what does it do? 2) How to sign up and get started 3) Ways to earn money on this platform 4) Payment methods and withdrawal process 5) Pros and cons 6) Is it legitimate or scam? 7) Final verdict and rating out of 10. Keep the tone honest and informative.'}
]},
'6b3WhkzwP-o':{items:[
{label:'Affiliate Marketing Guide Prompt',text:'Create a detailed step-by-step guide for earning money through affiliate marketing. Include: 1) What is affiliate marketing and how it works 2) How to sign up for the affiliate program 3) How to choose profitable products to promote 4) Marketing strategies (social media, WhatsApp, YouTube) 5) How to generate affiliate links 6) Tips to increase conversions and sales 7) Payment threshold and withdrawal process 8) Common mistakes to avoid. Make it beginner-friendly in Hindi.'}
]},
'tI3PHQt16xw':{items:[
{label:'Self-Education Motivation Prompt',text:'Write a powerful motivational script about the importance of self-education. Cover these points: 1) Why traditional education is not enough 2) The power of learning skills on your own 3) How self-educated people are changing the world 4) Practical steps to start self-education today 5) Best free resources for self-learning (YouTube, books, courses) 6) How to stay disciplined and consistent 7) The mindset shift needed to become self-educated. End with a powerful call-to-action that inspires the viewer to take action today.'}
]},
'M5IOEtXXpOI':{items:[
{label:'Prompt 1: Market & Niche Research',text:'You are an expert market researcher specializing in digital products, eBooks, creator businesses, and consumer trends.\n\nYour task is to conduct a deep, evidence-based market research study to determine the Top 10 best-selling and most profitable eBook niches in 2026.\n\nObjective:\nIdentify eBook niches with the highest probability of generating significant commercial sales during 2026 based on real search volume, purchase patterns, and creator success metrics.\n\nResearch Sources to Synthesize:\n1. Search Trends: Google Trends, SEMrush/Ahrefs search volume, Exploding Topics, AnswerThePublic.\n2. Social & Community: Reddit, X (Twitter), TikTok, YouTube, Indie Hackers, Quora (unmet needs, common frustrations, high-engagement guides).\n3. Creator Economy Platforms: Gumroad, Payhip, Stan Store, Lemon Squeezy, Etsy, Shopify (bestselling digital products, pricing tiers, customer reviews).\n4. Marketplaces: Amazon KDP Best Sellers, Kindle Store, Hot New Releases (review velocity, rankings, evergreen stability).\n5. AI Ecosystem Trends: Pragmatic AI workflows, automation tools (n8n, Zapier, Make), agentic workflows, Cursor/Claude/ChatGPT practical use cases.\n\nEvaluation Criteria for Each Niche:\nFor each of the top 10 niches, provide:\n1. Niche Name & Sub-Niche Angles\n2. Target Audience & Core Pain Point (Why they buy)\n3. Demand Score (1-10)\n4. Competition Level (1-10)\n5. Profit Potential & Average Selling Price ($)\n6. Evergreen Stability Score (1-10)\n7. Recommended Delivery Format (Actionable blueprint, system, workbook, prompt library, template bundle)\n8. Monetization & Backend Upsell Opportunities (Courses, community, consulting, software templates)\n9. Cross-Platform Validation Evidence (Amazon, Etsy/Gumroad, Reddit/Social proof)\n\nRank the niches from #1 to #10 using a weighted index of demand, monetization ceiling, and long-term sustainability. Conclude with the single best niche recommendation for a solo creator starting with zero ad budget in 2026.'},
{label:'Prompt 2: Ebook Content Writing',text:'You are a professional eBook author, technical writer, and editorial designer.\nCreate a complete, deeply practical, publication-ready eBook based on the specifications provided below.\n\nEBOOK SPECIFICATIONS:\n- Title: [ENTER YOUR EBOOK TITLE]\n- Subtitle: [ENTER SUBTITLE / CORE PROMISE]\n- Topic / Niche: [ENTER YOUR SPECIFIC TOPIC]\n- Target Audience: [e.g., Beginners / Working Professionals / Freelancers / Students]\n- Genre / Category: [e.g., Practical Business Guide / Step-by-Step Manual / Self-Help Workbook]\n- Tone & Voice: [e.g., Clear, Actionable, Authoritative yet Accessible]\n- Total Chapters: [e.g., 5 to 7 Chapters]\n\nCONTENT & STRUCTURAL RULES:\n1. Complete Coverage: Deliver fully written chapters without placeholder summaries, truncated lines, or "insert text here" shortcuts.\n2. High Signal, Zero Fluff: Every chapter must deliver clear mental models, actionable steps, real-world examples, and immediate takeaways.\n3. Logical Architecture:\n   - Chapter Title & Core Concept\n   - In-depth Explanation with Frameworks and Real-World Context\n   - Step-by-Step Implementation Guide\n   - Key Takeaways & Action Checklist\n4. Visual Layout Hints: Include dedicated visual suggestions per chapter with an AI Image Prompt for illustrations, diagrams, or infographic callouts.\n\nOUTPUT STRUCTURE:\n1. Cover Page Metadata (Title, Subtitle, Tagline, Target Audience)\n2. Table of Contents\n3. Introduction: The Problem, The Solution, and How to Use This Book\n4. Full Chapter Content (Chapters 1 through End)\n5. Conclusion, Resource Toolkit, and Next Steps Call-to-Action\n\nDeliver clean, formatted, production-ready copy ready for direct PDF rendering.'},
{label:'Prompt 3: Premium Cover Image',text:'A professional, commercial-grade vertical eBook cover design for: [YOUR BOOK TOPIC].\n\nDesign Philosophy: Ultra-minimalist, premium publishing-house editorial design, Swiss typography principles, generous negative space, sophisticated composition.\n\nVisual Concept: One striking, cohesive focal symbol representing the core theme with visual elegance. Single subject, clean lines, polished studio lighting, clean background, modern luxury aesthetic.\n\nTypography & Framing: Elegant, bold, legible modern sans-serif typography for the title and subtitle, perfectly balanced visual hierarchy, visually striking at small thumbnail size on digital storefronts.\n\nColor Palette: Refined 2-to-3 complementary tone palette (e.g., deep charcoal and warm ochre, or matte navy and soft cream). Subtle depth, rich textures, no cheap gradients.\n\nFormat & Technical Specs: 1600x2560 pixels, vertical 5:8 aspect ratio, sharp edges, 8k resolution, editorial print quality.\n\nNegative Prompt: Cluttered elements, complex multi-character scenes, chaotic backgrounds, generic corporate stock illustration, gaudy 3D clip-art, illegible fonts, heavy borders, watermark, low-res artifacts.'}
]}
};

/* ===== HELPERS ===== */
var AMP=String.fromCharCode(38);function esc(s){return String(s==null?'':s).replace(/&/g,AMP+'amp;').replace(/</g,AMP+'lt;').replace(/>/g,AMP+'gt;').replace(/"/g,AMP+'quot;').replace(/'/g,AMP+'#39;')}
function fmtViews(n){if(n==null)return'';if(n>=1000000)return(n/1000000).toFixed(1).replace('.0','')+'M';if(n>=1000)return(n/1000).toFixed(1).replace('.0','')+'K';return String(n)}
function fmtNum(n){return n==null?'':(n>=1000000?(n/1000000).toFixed(1).replace('.0','')+'M':n>=1000?(n/1000).toFixed(1).replace('.0','')+'K':String(n))}
function timeAgo(iso){var d=new Date(iso);if(isNaN(d))return'';var s=(Date.now()-d.getTime())/1000;if(s<0)s=0;if(s<3600)return Math.max(1,Math.floor(s/60))+' min ago';if(s<86400)return Math.floor(s/3600)+' hours ago';if(s<2592000)return Math.floor(s/86400)+' days ago';return d.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}
function isNew(iso){var d=new Date(iso);return !isNaN(d)&&(Date.now()-d.getTime())<172800000}
function thumb(id){return 'https://i.ytimg.com/vi/'+id+'/hqdefault.jpg'}
function pad2(n){return n<10?'0'+n:String(n)}

var SVG_EXT='<svg viewBox="0 0 24 24"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/></svg>';
var SVG_PLAY='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
var SVG_CHEV='<svg viewBox="0 0 24 24"><path fill="#00e5cc" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>';
var SVG_PLUS='<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>';
var SVG_SEARCH='<svg viewBox="0 0 24 24"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/></svg>';
var SVG_COPY='<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
var SVG_DOC='<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/></svg>';
var SVG_MIOUS='<svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>';

/* ===== FADE OBSERVER ===== */
var fadeObserver=new IntersectionObserver(function(e){e.forEach(function(t){if(t.isIntersecting)t.target.classList.add('visible')})},{threshold:0.05,rootMargin:'30px'});
function observeFades(){document.querySelectorAll('.fade-in:not(.visible)').forEach(function(e){fadeObserver.observe(e)})}

/* ===== ABOUT CHARACTER REVEAL ===== */
var aboutText=document.getElementById('about-text');
if(aboutText){var txt=aboutText.textContent;aboutText.innerHTML='';for(var i=0;i<txt.length;i++){var sp=document.createElement('span');sp.className='char';sp.textContent=txt[i]===' '?'\u00A0':txt[i];aboutText.appendChild(sp)}
var chars=aboutText.querySelectorAll('.char');var to=new IntersectionObserver(function(e){e.forEach(function(t){if(t.isIntersecting)chars.forEach(function(c,idx){setTimeout(function(){c.classList.add('lit')},idx*20)})})},{threshold:0.1});to.observe(aboutText)}

/* ===== MARQUEE ===== */
var r1=document.getElementById('marquee-row-1'),r2=document.getElementById('marquee-row-2');
function buildRow(row,imgs){row.innerHTML='';var a=imgs.concat(imgs,imgs);a.forEach(function(s){var im=document.createElement('img');im.src=s;im.className='marquee-tile';im.loading='lazy';row.appendChild(im)})}
var ms=document.querySelector('.marquee-section');
window.addEventListener('scroll',function(){if(!ms)return;var o=(window.scrollY-ms.offsetTop+window.innerHeight)*0.3;if(r1)r1.style.transform='translateX('+(o-200)+'px)';if(r2)r2.style.transform='translateX('+(-(o-200))+'px)'},{passive:true});
function rebuildMarquee(vids){var t=vids.slice(0,8).map(function(v){return thumb(v.id)});t.push(BANNER);t.push(PROFILE);var half=Math.ceil(t.length/2);buildRow(r1,t.slice(0,half));buildRow(r2,t.slice(half))}

/* ===== RENDER: SERVICES (VIDEOS section) ===== */
function metaLine(v){var parts=[];if(v.views!=null)parts.push(fmtViews(v.views)+' views');parts.push(timeAgo(v.published));if(v.likes!=null&&v.likes>0)parts.push(fmtNum(v.likes)+' likes');return esc(v.description||'Latest video from MR. VICKY.')+' — '+parts.join(' • ')}
function renderServices(videos){
  var el=document.getElementById('servicesList');if(!el)return;
  var html='';var top=videos.slice(0,4);
  top.forEach(function(v,i){
    html+='<div class="service-item fade-in"><span class="service-num">'+pad2(i+1)+'</span><div class="service-content"><span class="service-name">'+esc(v.title)+'</span><p class="service-desc">'+esc(v.description||'Money earning, finance, tools & website building.')+' '+fmtViews(v.views)+(v.views!=null?' views':'')+' • '+timeAgo(v.published)+'</p></div></div>';
  });
  html+='<div class="service-item fade-in"><span class="service-num">'+pad2(top.length+1)+'</span><div class="service-content"><span class="service-name">Channel Vision</span><p class="service-desc">MR. VICKY is about simple ideas, real strategies, and a better you. Subscribe to join a growing community. New videos every week on money, finance, tools, and website building.</p></div></div>';
  el.innerHTML=html;observeFades();
}

/* ===== RENDER: WATCH (video cards) ===== */
function renderWatch(videos){
  var el=document.getElementById('videosContainer');if(!el)return;
  var html='';
  videos.slice(0,9).forEach(function(v){
    var p=PROMPTS[v.id];
    var badge=isNew(v.published)?'<span class="badge-new">NEW</span>':'';
    var meta='';if(v.views!=null){meta+='<span>'+fmtViews(v.views)+' views</span><span>•</span>'}
    meta+='<span>'+timeAgo(v.published)+'</span>';
    html+='<div class="video-card fade-in">'
      +'<a href="'+esc(v.url)+'" target="_blank" style="text-decoration:none;color:inherit">'
      +'<div class="video-thumb-wrap">'+badge+'<img src="'+thumb(v.id)+'" alt="'+esc(v.title)+'" loading="lazy" onerror="this.style.display=\'none\'"><div class="play-btn">'+SVG_PLAY+'</div></div>'
      +'<div class="video-info"><div class="video-title-row"><div class="video-title">'+esc(v.title)+'</div><div class="video-ext-link">'+SVG_EXT+'</div></div><div class="video-meta">'+meta+'</div></div>'
      +'</a>'
      +'<button class="resources-btn" onclick="toggleResources(this,\'res-'+v.id+'\')"><span class="resources-btn-left">'+SVG_PLUS+' Video resources</span><span class="chev">'+SVG_CHEV+'</span></button>'
      +'<div class="resources-content" id="res-'+v.id+'">';
    if(p){p.items.forEach(function(it,idx){
      html+='<div class="prompt-item"><div class="prompt-item-head"><div class="prompt-item-label">'+SVG_SEARCH+' '+esc(it.label)+'</div><button class="prompt-copy-btn" onclick="copyPrompt(this,\'pt-'+v.id+'-'+idx+'\')">'+SVG_COPY+' Copy</button></div><div class="prompt-text" id="pt-'+v.id+'-'+idx+'">'+esc(it.text)+'</div></div>';
    })}else{
      html+='<div class="resource-placeholder">Watch the video on YouTube for links, tools & notes.</div>';
    }
    html+='</div></div>';
  });
  el.innerHTML=html;observeFades();
}

/* ===== RENDER: AI MODAL ===== */
function renderModal(videos){
  var el=document.getElementById('aiModalBody');if(!el)return;
  var html='';
  videos.slice(0,9).forEach(function(v){
    var p=PROMPTS[v.id];
    var meta='';if(v.views!=null){meta+='<span>'+fmtViews(v.views)+' views</span><span>•</span>'}
    meta+='<span>'+timeAgo(v.published)+'</span>';
    html+='<div class="prompt-video-card">'
      +'<div class="pvc-top"><img class="pvc-thumb" src="'+thumb(v.id)+'" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
      +'<div class="pvc-info"><div class="pvc-title">'+esc(v.title)+'</div><div class="pvc-meta">'+meta+'</div>'
      +'<button class="pvc-btn" onclick="toggleModalPrompts(this,\'mp-'+v.id+'\')">'+SVG_DOC+' Get Prompts</button></div></div>';
    if(p){
      html+='<div class="pvc-prompts" id="mp-'+v.id+'">';
      p.items.forEach(function(it,idx){
        html+='<div class="prompt-item"><div class="prompt-item-head"><div class="prompt-item-label">'+SVG_SEARCH+' '+esc(it.label)+'</div><button class="prompt-copy-btn" onclick="copyPrompt(this,\'mp-p-'+v.id+'-'+idx+'\')">'+SVG_COPY+' Copy</button></div><div class="prompt-text" id="mp-p-'+v.id+'-'+idx+'">'+esc(it.text)+'</div></div>';
      });
      html+='</div>';
    }else{
      html+='<div class="pvc-prompts" id="mp-'+v.id+'"><div class="resource-placeholder" style="padding:12px">Prompts for this video coming soon. <a href="'+esc(v.url)+'" target="_blank" style="color:#00e5cc">Watch on YouTube</a></div></div>';
    }
    html+='</div>';
  });
  el.innerHTML=html;
}

function renderAll(videos){
  renderServices(videos);
  renderWatch(videos);
  renderModal(videos);
  rebuildMarquee(videos);
}

/* ===== INITIAL RENDER (instant, from fallback) ===== */
renderAll(FALLBACK_VIDEOS);

/* ===== LAYER 1: videos.json (updated automatically by GitHub Action every 3 hours) ===== */
fetch('videos.json?t='+Date.now())
  .then(function(r){if(!r.ok)throw new Error('missing');return r.json()})
  .then(function(d){if(d&&d.videos&&d.videos.length)renderAll(d.videos)})
  .catch(function(){
    /* ===== LAYER 2: rss3json (live YouTube feed, browser-side) ===== */
    fetch('https://api.rss3json.com/v1/api.json?rss_url='+encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id='+CHANNEL_ID))
      .then(function(r){return r.json()})
      .then(function(d){
        if(!d||d.status!=='ok'||!d.items||!d.items.length)throw new Error('bad');
        var vids=d.items.map(function(it){var id=(it.link||'').split('v=')[1]||'';return{id:id,title:it.title,url:it.link,published:it.pubDate,views:null,likes:null}}).filter(function(v){return v.id});
        if(vids.length)renderAll(vids);
      })
      .catch(function(){/* keep fallback rendering */});
  });

/* ===== CONTACT / UI ===== */
function switchTab(t,b){document.querySelectorAll('.tab-btn').forEach(function(x){x.classList.remove('active')});document.querySelectorAll('.tab-content').forEach(function(x){x.classList.remove('active')});b.classList.add('active');document.getElementById('tab-'+t).classList.add('active')}
function toggleResources(b,id){var c=document.getElementById(id);if(!c)return;if(c.classList.contains('expanded')){c.classList.remove('expanded');b.classList.remove('expanded')}else{c.classList.add('expanded');b.classList.add('expanded')}}
function openAIModal(){var m=document.getElementById('aiModalOverlay');m.classList.add('active');document.body.style.overflow='hidden'}
function closeAIModal(){var m=document.getElementById('aiModalOverlay');m.classList.remove('active');document.body.style.overflow=''}
function closeAIModalOnBg(e){if(e.target===e.currentTarget)closeAIModal()}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeAIModal()});
function toggleModalPrompts(b,id){var c=document.getElementById(id);if(!c)return;if(c.classList.contains('expanded')){c.classList.remove('expanded');b.classList.remove('expanded');b.innerHTML=SVG_DOC+' Get Prompts'}else{c.classList.add('expanded');b.classList.add('expanded');b.innerHTML=SVG_MINUS+' Hide Prompts'}}
function copyPrompt(b,id){var t=document.getElementById(id);if(!t)return;navigator.clipboard.writeText(t.innerText).then(function(){var html=b.innerHTML;b.innerHTML='<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg> Copied!';b.classList.add('copied');setTimeout(function(){b.innerHTML=html;b.classList.remove('copied')},2000)})}
