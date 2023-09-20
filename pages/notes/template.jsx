import Layout from '../../components/Layout'

function TemplateComponent() {
    return (
        <Layout>
            <h1>Notes Static 靜態資源</h1>
            <h2>
                <a href="https://nextjs.tw/learn/basics/assets-metadata-css/assets">教案網址</a>
            </h2>
            <section>
                <h2>圖片元件和圖片優化</h2>
                <h3>aaa</h3>
                <div>next/image 是為了現代網頁的需求，而在 HTML img 基礎之上建立的擴展元件。</div>
                <ol>
                    <li></li>
                </ol>
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
                    ></code>
                </div>
            </section>
        </Layout>
    )
}

export default TemplateComponent

// {} &#123; &#125;
// () &#40; &#41;
// 半形空白 &ensp;
// < &lt;
// > &gt;
