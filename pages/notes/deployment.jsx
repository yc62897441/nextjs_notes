import Layout from '../../components/Layout'

function DeploymentComponent() {
    return (
        <Layout>
            <h1>Notes 部屬 Next.js</h1>
            <h2>
                <a href="https://nextjs.tw/learn/basics/deploying-nextjs-app/github">教案網址</a>
            </h2>
            <section>
                <h2>上傳至 GitHub</h2>
            </section>

            <h2>
                <a href="https://nextjs.tw/learn/basics/deploying-nextjs-app/deploy">教案網址</a>
            </h2>
            <section>
                <h2>部署至 Vercel</h2>
            </section>

            <h2>
                <a href="https://nextjs.tw/learn/basics/deploying-nextjs-app/platform-details">
                    教案網址
                </a>
            </h2>
            <section>
                <h2>Next.js 和 Vercel</h2>
                <div>Next.js 應用程式部署到 Vercel 時，默認情況下會自動執行以下步驟</div>
                <ol>
                    <li>
                        使用靜態生成的頁面和靜態資源（JS、CSS、圖像、字型等）的頁面將自動從 Vercel
                        的邊緣網路（Edge Network）提供服務，使網路傳遞極為迅速。
                    </li>
                    <li>
                        使用伺服端渲染和 API 路由的頁面將自動成為獨立的無伺服器運算（Serverless
                        Functions）。這允許頁面渲染和 API 請求無限擴展，以應對任何規模的流量。
                    </li>
                </ol>

                <div>Vercel 還有許多其他功能，例如：</div>
                <ol>
                    <li>
                        客製化域名： 一旦在 Vercel 上部署，您可以為您的 Next.js
                        應用程式指定一個自訂域名。請參閱
                        <a href="https://vercel.com/docs/concepts/projects/custom-domains?utm_source=next-site&utm_medium=learnpages&utm_campaign=learn_basics_deploying-nextjs-app_platform-details">
                            我們的文件
                        </a>
                        ，了解詳細的操作步驟。
                    </li>
                    <li>
                        環境變數： 您還可以在 Vercel 上設置環境變數。請參閱
                        <a href="https://vercel.com/docs/deployments/configure-a-build#environment-variables?utm_source=next-site&utm_medium=learnpages&utm_campaign=no-campaign">
                            我們的文件
                        </a>
                        ，了解詳細的操作步驟。然後，您可以在 Next.js 應用程式中使用這些
                        <a href="https://nextjs.tw/docs/basic-features/environment-variables#loading-environment-variables">
                            環境變數
                        </a>
                        。
                    </li>
                    <li>
                        自動化 HTTPS： 默認情況下啟用了
                        HTTPS（包括自訂域名），無需進行額外的配置。我們會自動更新 SSL
                        憑證，讓您的應用程式始終保持安全的加密連接。
                    </li>
                </ol>

                <h3>預覽部署</h3>
                <div>
                    當您有個開啟的 Pull Request，Vercel
                    會自動為該分支創建預覽部署頁面，並在每次提交時更新。預覽 URL
                    將始終指向最新的預覽部署頁面。
                </div>
                <ol>
                    <li>在您的應用程式上創建一個新的分支。</li>
                    <li>進行一些更改並將其推送到 GitHub。</li>
                    <li>建立一個新的 Pull Request。</li>
                    <li>
                        您應該會在 Pull Request 頁面上看到 Vercel bot 的評論。嘗試點擊該評論中的預覽
                        URL。您應該能夠看到剛剛所做的修改。
                    </li>
                </ol>
                <div>
                    如果預覽部署看起來不錯，您可以將其合併到主要分支。當您這樣做時，Vercel
                    會自動創建一個生產環境部署。
                </div>
            </section>

            <h2>
                <a href="https://nextjs.tw/learn/basics/deploying-nextjs-app/other-hosting-options">
                    教案網址
                </a>
            </h2>
            <section>
                <h2>其他供應商</h2>
                <div>Next.js 可以部署到任何支援 Node.js 的主機供應商。</div>
                <div>
                    (先把專案傳到伺服器主機，並 npm install)在您的主機供應商上運行一次 build
                    指令，該指令將在 .next 資料夾中構建生產應用程式。
                </div>
                <div>
                    構建完成後，執行 start 指令會啟動一個混合用的 Node.js
                    伺服器，提供靜態生成、伺服端渲染的頁面及 API 路由。
                </div>
            </section>
        </Layout>
    )
}

export default DeploymentComponent

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
