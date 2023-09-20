import Layout from '../../components/Layout'

function StaticComponent() {
    return (
        <Layout>
            <h1>Notes Static 靜態資源</h1>
            <h2>
                <a href="https://nextjs.tw/learn/basics/assets-metadata-css/assets">教案網址</a>
            </h2>
            <section>
                <h2>圖片元件和圖片優化</h2>
                <div>next/image 是為了現代網頁的需求，而在 HTML img 基礎之上建立的擴展元件。</div>
                <div>
                    在預設情況下 Next.js 支援圖片優化。包括了支援現代 web
                    格式，且進行大小調整、優化和運行圖片 (就像 WebP
                    一樣)，這避免了在較小的可見區域加載大型圖片。同時，Next.js
                    還可以自動適應未來的圖片格式，並將其提供給支援這些格式的瀏覽器。
                </div>
                <div>
                    自動圖片優化可與任何圖片一起使用。即使圖片由外部數據源（例如
                    CMS）托管，它仍然可以進行優化。
                </div>
            </section>
            <section>
                <h2>使用圖片元件</h2>
                <div>
                    Next.js 在使用者<span>發出請求時</span>，會動態優化圖片，而
                    <span>非在建置時</span>
                    進行優化。這與靜態網站產生器以及僅支援靜態內容的解決方案不同，不論是上傳 10
                    張還是 1 千萬張圖片，都不會增加建置時間。
                </div>
                <div>
                    圖片默認採用<span>「懶加載」</span>
                    方式，這意味著圖片不在可見區域時不會影響頁面速度。當圖片被滾動到可見區域時才會加載。
                </div>
                <div>
                    圖片總是以避免
                    <a href="https://web.dev/cls/" target="_blank">
                        累積版面位移
                    </a>
                    的方式呈現，這是 Google 會在
                    <a
                        href="https://developers.google.com/search/blog/2020/05/evaluating-page-experience?hl=zh-tw"
                        target="_blank"
                    >
                        搜尋排名
                    </a>
                    中使用的
                    <a href="https://web.dev/vitals/#core-web-vitals" target="_blank">
                        核心網頁指標
                    </a>
                    。
                </div>
                <div>
                    這裡有一個使用 next/image 來顯示我們個人圖片的範例。height 和 width
                    屬性應該是期望的渲染大小，並具有<span>與原始圖片相同的長寬比</span>。
                </div>
            </section>
            <h2>
                <a href="https://nextjs.tw/learn/basics/assets-metadata-css/metadata">教案網址</a>
            </h2>
            <section>
                <h2>詮釋資料（Metadata）</h2>

                <div>使用 &lt;Head&gt; 在裡面做設定，跟 html 的 head 一樣。</div>

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
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            &lt;
                        </span>
                        <span class="token" style={{ color: 'rgb(150, 203, 254)' }}>
                            Head
                        </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            &gt;
                        </span>
                        <span></span>
                        <span> </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            &lt;
                        </span>
                        <span class="token" style={{ color: 'rgb(150, 203, 254)' }}>
                            title
                        </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            &gt;
                        </span>
                        <span>Create Next App</span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            &lt;/
                        </span>
                        <span class="token" style={{ color: 'rgb(150, 203, 254)' }}>
                            title
                        </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            &gt;
                        </span>
                        <span></span>
                        <span> </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            &lt;
                        </span>
                        <span class="token" style={{ color: 'rgb(150, 203, 254)' }}>
                            link
                        </span>
                        <span class="token" style={{ color: 'rgb(150, 203, 254)' }}>
                            {' '}
                        </span>
                        <span class="token" style={{ color: 'rgb(168, 255, 96)' }}>
                            rel
                        </span>
                        <span class="token attr-equals" style={{ color: 'rgb(197, 200, 198)' }}>
                            =
                        </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            "
                        </span>
                        <span class="token" style={{ color: 'rgb(249, 238, 152)' }}>
                            icon
                        </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            "
                        </span>
                        <span class="token" style={{ color: 'rgb(150, 203, 254)' }}>
                            {' '}
                        </span>
                        <span class="token" style={{ color: 'rgb(168, 255, 96)' }}>
                            href
                        </span>
                        <span class="token attr-equals" style={{ color: 'rgb(197, 200, 198)' }}>
                            =
                        </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            "
                        </span>
                        <span class="token" style={{ color: 'rgb(249, 238, 152)' }}>
                            /favicon.ico
                        </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            "
                        </span>
                        <span class="token" style={{ color: 'rgb(150, 203, 254)' }}>
                            {' '}
                        </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            /&gt;
                        </span>
                        <span></span>
                        <span></span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            &lt;/
                        </span>
                        <span class="token" style={{ color: 'rgb(150, 203, 254)' }}>
                            Head
                        </span>
                        <span class="token" style={{ color: 'rgb(197, 200, 198)' }}>
                            &gt;
                        </span>
                        <span></span>
                    </code>
                </div>
            </section>

            <h2>
                <a href="https://nextjs.tw/learn/basics/assets-metadata-css/third-party-javascript">
                    教案網址
                </a>
            </h2>
            <section>
                <h2>第三方 JavaScript</h2>
                <div>
                    使用 Third-Party JavaScript ，不要在 &lt;Head&gt; 內引入，而是使用
                    &lt;Script&gt;。
                </div>
                <div>
                    next/script 是 HTML script tag 的延伸(extension)，可以 optimizes when additional
                    scripts are fetched and executed.
                </div>
                <div>
                    strategy 控制第三方腳本何時載入，lazyOnload 告訴 Next.js
                    在瀏覽器閒置期間慵懶地載入此特定腳本。
                </div>
                <div>
                    onLoad 用於當腳本載入完成後要立即執行的任何 JavaScript
                    程式碼。在此範例中，我們將一則訊息記錄於控制台，其提及腳本已正確地載入。
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
                        &lt;Script src="https://connect.facebook.net/en_US/sdk.js"
                        strategy="lazyOnload" onLoad=&#123;&#40;&#41;=&gt;
                        console.log&#40;`腳本正確地載入，window.FB 已被定義`&#41;&#125; /&gt;
                    </code>
                </div>
            </section>

            <h2>
                <a href="https://nextjs.tw/learn/basics/assets-metadata-css/css-styling">
                    教案網址
                </a>
            </h2>
            <section>
                <h2>CSS 樣式</h2>

                <h3>CSS modules</h3>
                <div>
                    CSS modules 允許你在元件階層中以本地範疇（scope）的方式使用
                    CSS，並自動建立唯一的 class 名稱。這使你可以在不同的檔案中使用相同的 CSS class
                    名稱，而不用擔心 class 名稱衝突。
                </div>
                <div>使用 CSS modules</div>
                <ol>
                    <li>建立 xxxx.module.css 檔案，並在裡面用 class 選擇器撰寫 style。</li>
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
                            .container &#123; <br />
                            &ensp; max-width: 36rem; <br />
                            &ensp; padding: 0 1rem; <br />
                            &ensp; margin: 3rem auto 6rem; <br />
                            &#125;
                        </code>
                    </div>
                    <li>
                        在 component 中 import xxxx.module.css 檔案，並且指派一個名稱給它，例如
                        import styles from './xxx.module.css'。
                    </li>
                    <li>指派 styles.container 給 html 標籤作為 className。</li>
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
                            import styles from './layout.module.css'; <br />
                            export default function Layout(&#123; children &#125;) &#123; <br />
                            &ensp; return &lt;div
                            className=&#123;styles.container&#125;&gt;&#123;children&#125;&lt;/div&gt;{' '}
                            <br />
                            &#125;
                        </code>
                    </div>
                </ol>

                <h3>使用全域 CSS(Global Styles)</h3>
                <ol>
                    <li>
                        在 pages 建立 _app.js，在預設下 _app.js 會是所有 pages 的 top-level
                        component，等於是它會包含(wraps)了所有的 pages。The default export of
                        _app.js is a top-level React component that wraps all the pages in your
                        application.
                    </li>
                    <li>在 styles 資料夾中建立 global.css 檔案。</li>
                    <li>只能在 _app.js import global CSS。</li>
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
                            // `pages/_app.js` <br />
                            import '../styles/global.css'; <br />
                            <br />
                            export default function App(&#123; Component, pageProps &#125;) &#123;{' '}
                            <br />
                            &ensp; return &lt;Component &#123;...pageProps&#125; /&gt; <br />
                            &#125; <br />
                        </code>
                    </div>
                </ol>

                <h3>其他 styling 小技巧</h3>
                <ol>
                    <li>
                        使用 classnames 函式庫來切換類別。Using clsx library to toggle classes。
                    </li>
                    <li>自訂 PostCSS 設定。Customizing PostCSS Config。</li>
                    <li>使用 Sass。Using Sass。</li>
                </ol>
            </section>
        </Layout>
    )
}

export default StaticComponent


