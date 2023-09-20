import Layout from '../../components/Layout'

function DynamicRoutesComponent() {
    return (
        <Layout>
            <h1>Notes 動態路由</h1>
            <h2>
                <a href="https://nextjs.tw/learn/basics/dynamic-routes/implement-getstaticpaths">
                    教案網址
                </a>
            </h2>
            <section>
                <h2>執行 getStaticPaths</h2>

                <div>依照外部資料提供的路徑來產生頁面。</div>
                <div>在 pages/posts 路徑底下建立一支名稱為 [id].js 檔案。</div>
                <div>getAllPostIds 清單內容不僅僅是字串的陣列，它還必須是一個物件的陣列。</div>
                <div>
                    每個物件必須包含 params 的鍵，並且值為包含 id 鍵（因為我們在檔案名稱使用 [id]）
                    的物件。不這麼做的話，getStaticPaths 會無法起到它的作用。
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
                        // getAllPostIds() returns an array that looks like this: <br />
                        // [ <br />
                        // &ensp; &#123; <br />
                        // &ensp; &ensp; params: &#123; <br />
                        // &ensp; &ensp; &ensp; id: 'ssg-ssr' <br />
                        // &ensp; &ensp; &#125; <br />
                        // &ensp; &#125;, <br />
                        // &ensp; &#123; <br />
                        // &ensp; &ensp; params: &#123; <br />
                        // &ensp; &ensp; &ensp; id: 'pre-rendering' <br />
                        // &ensp; &ensp; &#125; <br />
                        // &ensp; &#125; <br />
                        // ] <br />
                    </code>
                </div>
                <div>
                    引入 getAllPostIds 函式並在 getStaticPaths 之中使用。 打開 pages/posts/[id].js
                    並將下方的程式碼貼到導出的 Post 組件上方
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
                        import &#123;getAllPostIds&#125; from '../../lib/posts' <br />
                        <br />
                        export async function getStaticPaths&#40;&#41; &#123; <br />
                        &ensp; const paths = getAllPostIds&#40;&#41; <br />
                        &ensp; return &#123; <br />
                        &ensp; &ensp; paths, <br />
                        &ensp; &ensp; fallback: false, <br />
                        &ensp; &#125; <br />
                        &#125; <br />
                        <br />
                        export async function getStaticProps(&#123; params &#125;) &#123; <br />
                        &ensp; // Fetch necessary data for the blog post using params.id <br />
                        &ensp; return &#123; <br />
                        &ensp; &ensp; props: &#123; <br />
                        &ensp; &ensp; &ensp; postData, <br />
                        &ensp; &ensp; &#125;, <br />
                        &ensp; &#125; <br />
                        &#125; <br />
                        <br />
                        export default function Post(&#123; postData &#125;) &#123; <br />
                        &ensp; return &lt;Layout&gt;...&lt;/Layout&gt; <br />
                        &#125;
                    </code>
                </div>
            </section>
            <br />

            <h2>
                <a href="https://nextjs.tw/learn/basics/dynamic-routes/dynamic-routes-details">
                    教案網址
                </a>
            </h2>
            <section>
                <h2>動態路由的細節</h2>
                <h3>對外部 API 發起請求或對資料庫進行查詢</h3>
                <div>getStaticPaths 能夠對資料來源請求資料。例如對外部 API 進行資料請求。</div>
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
                        export async function getAllPostIds() &#123; <br />
                        &ensp; // Instead of the file system, <br />
                        &ensp; // fetch post data from an external API endpoint <br />
                        &ensp; const res = await fetch('..'); <br />
                        &ensp; const posts = await res.json(); <br />
                        &ensp; return posts.map((post) =&gt; &#123; <br />
                        &ensp; &ensp; return &#123; <br />
                        &ensp; &ensp; &ensp; params: &#123; <br />
                        &ensp; &ensp; &ensp; &ensp; id: post.id, <br />
                        &ensp; &ensp; &ensp; &#125;, <br />
                        &ensp; &ensp; &#125; <br />
                        &ensp; &#125;) <br />
                        &#125;
                    </code>
                </div>

                <h3>開發階段 vs. 生產階段</h3>
                <div>
                    在 開發階段（npm run dev 或 yarn dev）, getStaticPaths 在每次請求發生時執行。
                </div>
                <div>在 生產階段，getStaticPaths 在打包階段執行。</div>

                <h3>回呼函式</h3>
                <div>
                    在 getStaticPaths 返回的 fallback: false 部分，如果 fallback 為
                    false，那麼任何不是被 getStaticPaths 返回的路徑，這路徑將會導致 404 頁面
                    的結果。If fallback is false, then any paths not returned by getStaticPaths will
                    result in a 404 page.。
                </div>
                <div>如果 fallback 為 true，那麼 getStaticPaths 的行為會變成：</div>
                <ol>
                    <li>被 getStaticPaths 返回的路徑會在打包階段渲染成 HTML。</li>
                    <li>
                        在打包階段未被產生的路徑將不會導致404錯誤頁面。而是 Next.js
                        在第一次對於這些路徑請求時提供一個回呼函式版本的頁面。
                    </li>
                    <li>
                        在背景，Next.js
                        會靜態產生請求的路徑。後面如果又請求相同的路徑的話就會提供之前已經產生好的頁面，就像其他頁面在打包階段就會進行預渲染一樣。
                    </li>
                </ol>
                <div>
                    如果 fallback 為 blocking，新的路徑將會利用 getStaticProps
                    進行伺服器端的渲染，並且被快取起來，以利之後遇到相同的請求時可以重複使用，所以每個路徑只會發生一次伺服器端的渲染。If
                    fallback is blocking, then new paths will be server-side rendered with
                    getStaticProps, and cached for future requests so it only happens once per
                    path.。
                </div>
                <div>
                    如果想了解更多有關 fallback: true 和 fallback: 'blocking 細節的話請參考 fallback{' '}
                    <a href="https://nextjs.tw/docs/api-reference/data-fetching/get-static-paths#fallback-false">
                        文件
                    </a>
                    。
                </div>

                <h3>取得所有的路徑</h3>
                <div>
                    動態路由可以藉由在 [] 新增（...）的方式來取得所有的路徑。比方說：
                    pages/posts/[...id].js 可以匹配 /posts/a， 及 /posts/a/b，/posts/a/b/c
                    以此類推。
                </div>
                <div>
                    不過如果你這麼做的話，在 getStaticPaths 中，你必須回傳一個陣列作為 id
                    鍵的值，像是這樣：
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
                        return [ <br />
                        &ensp; &#123; <br />
                        &ensp; &ensp; params: &#123; <br />
                        &ensp; &ensp; &ensp; // Statically Generates /posts/a/b/c <br />
                        &ensp; &ensp; &ensp; id: ['a', 'b', 'c'], <br />
                        &ensp; &ensp; &#125;, <br />
                        &ensp; &#125;, <br />
                        &ensp; &#123; params:... &#125;, <br />
                        &ensp; ... <br />
                        ];
                    </code>
                </div>
                <div>且 params.id 在 getStaticProps 中將會是陣列的形式：</div>
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
                        export async function getStaticProps(&#123; params &#125;) &#123; <br />
                        &ensp; // params.id will be like ['a', 'b', 'c'] <br />
                        &#125;
                    </code>
                </div>
                <div>
                    查看
                    <a href="https://nextjs.tw/docs/routing/dynamic-routes#catch-all-routes">
                        取得所有路徑的文件說明
                    </a>
                    來了解更多。
                </div>

                <h3>路由</h3>
                <div>
                    如果你想操作 Next.js 路由的話，可以藉由引入 next/router 中的 useRouter 來使用。
                </div>

                <h3>404 頁面</h3>
                <div>
                    為了建立一個客製化的 404 頁面，請建立一支 pages/404.js
                    的檔案。這隻檔案在打包階段會被靜態產生出來。前往
                    <a href="https://nextjs.tw/docs/advanced-features/custom-error-page">
                        錯誤頁面文件
                    </a>
                    了解更多。
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
                        // pages/404.js <br />
                        export default function Custom404() &#123; <br />
                        &ensp; return &lt;h1&gt;404 - Page Not Found&lt;/h1&gt;; <br />
                        &#125;
                    </code>
                </div>
            </section>
        </Layout>
    )
}

export default DynamicRoutesComponent

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
