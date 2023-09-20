import Layout from '../../components/Layout'

function ApiRoutesComponent() {
    return (
        <Layout>
            <h1>Notes API 路由</h1>
            <h2>
                <a href="https://nextjs.tw/learn/basics/api-routes/creating-api-routes">教案網址</a>
            </h2>
            <section>
                <h2>創建 API 路由</h2>

                <div>
                    <a href="https://nextjs.tw/docs/api-routes/introduction">API 路由</a>
                    讓你可以在 Next.js 應用程式中建立一個 API 端點，透過在 pages/api
                    目錄中建立一個具有以下格式的函式即可達成：
                </div>
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
                        // hello.js <br />
                        // req = HTTP 傳入之訊息，res = HTTP 伺服器回應 <br />
                        export default function handler(req, res) &#123; <br />
                        &ensp; res.status(200).json(&#123; text: 'Hello' &#125;) <br />
                        &#125;
                    </code>
                </div>
                <div>他們可以被部署為 Serverless Functions（也被稱為 Lambdas）。</div>
                <div>
                    req 是{' '}
                    <a href="https://nodejs.org/api/http.html#http_class_http_incomingmessage">
                        http.IncomingMessage
                    </a>{' '}
                    的一個實例，並且有一些預先建立的
                    <a href="https://nextjs.tw/docs/api-routes/request-helpers">中間軟體</a>。
                </div>

                <div>
                    res 是{' '}
                    <a href="https://nodejs.org/api/http.html#http_class_http_serverresponse">
                        http.ServerResponse
                    </a>{' '}
                    的一個實例，並且有一些
                    <a href="https://nextjs.tw/docs/api-routes/response-helpers">輔助函式</a>。
                </div>
            </section>

            <h2>
                <a href="https://nextjs.tw/learn/basics/api-routes/api-routes-details">教案網址</a>
            </h2>
            <section>
                <h2>API 路由細節</h2>
                <h3>不要從 getStaticProps 或 getStaticPaths 中提取 API 路由</h3>
                <div>
                    你不應該從 getStaticProps 或 getStaticPaths 中提取 API
                    路由。相反地，你應該直接在 getStaticProps 或 getStaticPaths
                    中撰寫你的伺服器端程式碼（或呼叫輔助函式）。
                </div>
                <div>
                    原因：getStaticProps 和 getStaticPaths
                    只會在伺服器端執行，並且永遠不會在客戶端執行。此外，這些函式不會包含在瀏覽器的
                    JS bundle 中。這意味著你可以撰寫直接查詢資料庫的程式碼，而不會將其傳送給客戶端。
                </div>

                <h3>一個好的使用案例：處理表單輸入</h3>
                <div>
                    處理表單輸入是 API
                    路由的一個良好使用案例。舉例來說，你可以在頁面上建立一個表單，並讓它向你的 API
                    路由發送一個 POST 請求，隨後你可以撰寫程式碼直接將其儲存到你的資料庫。你的客戶端
                    bundle 中並不會夾帶 API 路由程式碼，因此你可以很放心地撰寫伺服器端的程式碼。
                </div>
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
                        export default function handler(req, res) &#123; <br />
                        &ensp; const email = req.body.email; <br />
                        &ensp; // 然後將 email 儲存到資料庫，等等... <br />
                        &#125;
                    </code>
                </div>

                <h3>預覽模式</h3>
                <div>
                    當你的頁面從無頭內容管理系統（Headless
                    CMS）取得資料時，靜態生成是很實用的。然而，當你在無頭 CMS
                    上編輯草稿並期望立即預覽草稿時，結果不盡如人意。你希望 Next.js
                    僅在請求期間（而非建置期間）來渲染這些頁面，並取得草稿內容（而非已發佈的內容）。你希望
                    Next.js 只在這個特定情況下繞過靜態生成。
                </div>
                <div>
                    Next.js 有一個名為預覽模式的功能，可以解決上述問題，並且它使用 API
                    路由。若要瞭解更多資訊，請參閱
                    <a href="https://nextjs.tw/docs/advanced-features/preview-mode">預覽模式</a>
                    文件。
                </div>

                <h3>動態 API 路由</h3>
                <div>
                    API 路由可以是動態的，就像一般頁面一樣。請參閱
                    <a href="https://nextjs.tw/docs/api-routes/dynamic-api-routes">動態 API 路由</a>
                    文件以瞭解更多資訊。
                </div>
            </section>
        </Layout>
    )
}

export default ApiRoutesComponent

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
