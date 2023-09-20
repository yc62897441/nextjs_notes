import Layout from '../../components/Layout'

function RequestTimeGetDataComponent() {
    return (
        <Layout>
            <h1>Notes 在請求時拿取資料</h1>
            <h2>
                <a href="https://nextjs.tw/learn/basics/data-fetching/request-time">教案網址</a>
            </h2>
            <section>
                <h3>使用 getServerSideProps</h3>
                <div>
                    只有在需要在請求時取得資料並預先渲染頁面時，才使用 getServerSideProps。並且使用
                    export async function getServerSideProps(context) &#123; &#125;。因為
                    getServerSideProps
                    會再請求時被呼叫，所以它的參數（context）包含了請求特定的參數。
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
                        export async function getServerSideProps(context) &#123; <br />
                        &ensp; return &#123; <br />
                        &ensp; &ensp; props: &#123; <br />
                        &ensp; &ensp; &ensp; // props for your component <br />
                        &ensp; &ensp; &#125;, <br />
                        &ensp; &#125; <br />
                        &#125;
                    </code>
                </div>
                <div>
                    因為伺服器必須在每次請求時計算結果，所以第一個位元組的時間 (TTFB) 會比
                    getStaticProps 慢，而且結果無法被 CDN 快取，除非你額外設定。
                </div>

                <h3>客戶端渲染</h3>
                <div>
                    如果需要外部資料，但又不需要 pre-render，則可以使用 Client-side Rendering。
                </div>
                <div>
                    靜態生成（預先渲染 Statically generate）先處理頁面上不需要外部資料的部分。
                </div>
                <div>之後，當頁面讀取時，在 client 端再去 fetch 資料，補足需要外部資料的部分。</div>
                <div>
                    這個策略適合使用在私人的 dashboard(儀錶板)，不需要顧及 SEO，也不需要
                    pre-rendering，並且資料會經常更新，所以需要在請求時取得資料。。
                </div>

                <h3>SWR</h3>
                <div>
                    Next.js 的背後團隊也創造了一個 React hook 專門用來拿取資料，叫做 SWR
                    。如果你在客戶端拿取資料，我們強烈推薦你使用它。它處理了快取、重新驗證、焦點追蹤、間隔重新拿取等等。
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
                        import useSWR from 'swr'
                        <br />
                        function Profile&#40;&#41; &#123;
                        <br />
                        &ensp; const &#123; data, error &#125; = useSWR&#40;'/api/user', fetch&#41;
                        <br />
                        &ensp; if &#40;error&#41; return &lt;div&gt;failed to load&lt;/div&gt;
                        <br />
                        &ensp; if &#40;!data&#41; return &lt;div&gt;loading...&lt;/div&gt;
                        <br />
                        &ensp; return &lt;div&gt;hello &#123;data.name&#125;!&lt;/div&gt;
                        <br />
                        &#125;
                    </code>
                </div>
            </section>
        </Layout>
    )
}

export default RequestTimeGetDataComponent

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
