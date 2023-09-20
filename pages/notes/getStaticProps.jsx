import Layout from '../../components/Layout'

function GetStaticPropsComponent() {
    return (
        <Layout>
            <h1>Notes getStaticProps</h1>

            <h2>
                <a href="https://nextjs.tw/learn/basics/data-fetching/pre-rendering">教案網址</a>
            </h2>
            <section>
                <h2>提前渲染</h2>
                <div>
                    在預設情況下，Next.js 在每個頁面都會提前渲染。這代表 Next.js 會預先產生每一頁的
                    HTML，而不是由前端的 JavaScript 渲染，這樣可以讓我們的網頁有更好的效能以及 SEO。
                </div>
                <div>
                    每個產生的 HTML 都會與該頁面所需要的最小化 JavaScript
                    程式碼相關聯。當瀏覽器載入一個頁面時，它的 JavaScript
                    程式碼會執行並使頁面可以讓使用者進行互動（這個過程稱為 hydration）。
                </div>
            </section>

            <h2>
                <a href="https://nextjs.tw/learn/basics/data-fetching/two-forms">教案網址</a>
            </h2>
            <section>
                <h2>提前渲染的兩種形式</h2>
                <div>
                    Next.js
                    擁有兩種形式的提前渲染(pre-rendering)：靜態生成和伺服器渲染。兩者之間的差別在於生成
                    HTML 頁面的時間點。
                </div>
                <ol>
                    <li>靜態生成會在最一開始生成 HTML，然後在每個請求中重複使用它。</li>
                    <li>伺服器渲染會在每一個請求中生成 HTML。</li>
                </ol>
                <div>
                    在開發模式時，為了便於開發所以算是 Static Generation，依然是在每個 page 被
                    request 時才進行
                    pre-rendering。但在正式環境中，靜態生成將只在構建時生成一次，而不是在每個請求上發生。
                </div>
                <div>
                    Next.js
                    可以讓你選擇每個頁面使用哪種形式的提前渲染。例如在大多數頁面套用靜態生成，並在剩餘頁面中使用伺服器渲染。
                </div>

                <h3>Static Generation v.s. Server-side Rendering 使用時機</h3>
                <div>
                    官方建議使用 Static Generation(不論這個頁面 with and without
                    data)，因為頁面只須被建立一次、可以使用 CDN、並且被 request 時比 Server-side
                    Rendering 還要快。
                </div>
                <div>
                    然而，當頁面內容會經常變動，或是每次 request 時都會不同時，則使用 Server-side
                    Rendering。
                </div>
            </section>

            <h2>
                <a href="https://nextjs.tw/learn/basics/data-fetching/implement-getstaticprops">
                    教案網址
                </a>
            </h2>
            <section>
                <h2>實現 getStaticProps</h2>
                <div
                    style={{
                        color: 'rgb(197, 200, 198)',
                        textShadow: 'rgba(0, 0, 0, 0.3) 0px 1px',
                        fontFamily:
                            'Inconsolata, Monaco, Consolas, "Courier New", Courier, monospace',
                        direction: 'ltr',
                        textAlign: 'left',
                        whiteSpace: 'pre',
                        wordSpacing: 'normal',
                        wordBreak: 'normal',
                        lineHeight: '1.5',
                        tabSize: '4',
                        hyphens: 'none',
                        padding: '1em',
                        margin: '0.5em 0px',
                        overflow: 'auto',
                        borderRadius: '0.3em',
                        background: 'rgb(29, 31, 33)',
                    }}
                >
                    <code
                        class="language-html"
                        style={{
                            color: 'rgb(197, 200, 198)',
                            textShadow: 'rgba(0, 0, 0, 0.3) 0px 1px',
                            fontFamily:
                                'Inconsolata, Monaco, Consolas, "Courier New", Courier, monospace',
                            direction: 'ltr',
                            textAlign: 'left',
                            whiteSpace: 'pre',
                            wordSpacing: 'normal',
                            wordBreak: 'normal',
                            lineHeight: '1.5',
                            tabSize: '4',
                            hyphens: 'none',
                        }}
                    >
                        import &#123; getSortedPostsData &#125; from '../lib/posts' <br />
                        <br />
                        export async function getStaticProps() &#123; <br />
                        &ensp; const allPostsData = getSortedPostsData() // 從外部取得資料 <br />
                        &ensp; return &#123; <br />
                        &ensp; &ensp; props: &#123; <br />
                        &ensp; &ensp; &ensp; allPostsData, <br />
                        &ensp; &ensp; &#125;, <br />
                        &ensp; &#125; <br />
                        &#125; <br />
                        <br />
                        export default function Home (&#123; allPostsData &#125;) &#123; ... &#125;
                    </code>
                </div>
            </section>

            <h2>
                <a href="https://nextjs.tw/learn/basics/data-fetching/getstaticprops-details">
                    教案網址
                </a>
            </h2>
            <section>
                <h2>getStaticProps 的細節</h2>
                <div>可以在 getStaticProps 裡面 fetch API、query database。</div>
                <div>
                    因為 getStaticProps
                    只會在伺服器端執行。它永遠不會在客戶端執行。它甚至不會被包含在瀏覽器的 JS
                    檔案中。這代表你可以寫像是直接<span>查詢資料庫的程式碼</span>，而
                    <span>不會被送到瀏覽器</span>。
                </div>
                <div>
                    Next.js 在客戶端與伺服器端都含涵蓋 (polyfills) 了 fetch() function。你不需要額外
                    import 它。
                </div>

                <h3>開發模式 vs. 正式環境</h3>
                <div>
                    在開發模式 development mode(npm run dev 或 yarn dev)，getStaticProps 會在每次
                    page 被 request 時執行；在 正式環境 production mode，getStaticProps 會在 build
                    時執行，因為只有在 build
                    時執行，所以將無法使用只有在請求時才能取得的資料，像是參數或 HTTP headers。
                </div>
                <div>
                    在正式環境，getStaticProps
                    只會在每次生成時執行。而這個行為可以透過getStaticPaths 回傳的 fallback key
                    來增強。
                </div>

                <h3>只允許在頁面中使用</h3>
                <div>
                    getStaticProps 只能從頁面中(page file)匯出(export)。你無法從非頁面檔案中匯出它。
                    其中一個原因是是因為 React 需要在頁面被渲染前就取得所有必要的資料。
                </div>

                <h3>需要在請求時取得資料怎麼辦？</h3>
                <div>如果需要在 request time 時才 fetch 資料，則需使用 Server-side Rendering。</div>
            </section>
        </Layout>
    )
}

export default GetStaticPropsComponent

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
