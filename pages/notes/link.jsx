import Layout from '../../components/Layout'

function LinkComponent() {
    return (
        <Layout>
            <h1>Notes Link</h1>
            <h2>
                <a href="https://nextjs.tw/learn/basics/navigate-between-pages/client-side">
                    教案網址
                </a>
            </h2>
            <section>
                <h2>客戶端的頁面跳轉</h2>
                <div>
                    Link 元件可以允許在同一個 Next.js
                    應用程式中的兩個頁面之間進行客戶端的頁面跳轉，客戶端導航意味著頁面轉換時使用{' '}
                    <span>JavaScript</span>，這比瀏覽器內建的預設跳轉方法更快。
                </div>
                <ol>
                    <li>打開瀏覽器的開發者工具並把 html 中 background 的 CSS 屬性改成 yellow。</li>
                    <li>點擊連結以在兩個頁面中來回切換</li>
                    <li>您會看到黃色背景在頁面轉換之間持續存在</li>
                </ol>
                <div>
                    這表明瀏覽器沒有載入整個頁面並且用戶端跳轉正常運作。 This shows that the browser
                    does not load the full page and client-side navigation is working.
                </div>
                <div>
                    如果您使用了 a href="..." 而不是 Link
                    href="..."，則在點擊連結時背景顏色將被清除，因為瀏覽器會進行完全重新整理。
                </div>
            </section>
            <section>
                <h2>程式碼拆分和提前載入連結</h2>
                <div>
                    Next.js 會自動進行程式碼拆分，所以每個頁面只載入該頁面所需的內容。
                    這意味著在渲染首頁時，初始化的過程不會載入其他頁面的程式碼。
                </div>
                <div>
                    僅載入您請求的頁面也意味著頁面是獨立的程式碼。
                    如果某個頁面拋出錯誤，應用程式的其餘部分仍然可以正常運作。
                </div>
                <div>
                    此外，在 Next.js 的<span>生產版本</span>中，每當 Link
                    元件出現在瀏覽器的顯示裝置中時，Next.js 都會在後台自動提前載入連結頁面的程式碼。所以再切換頁面時會 near-instant。
                </div>
            </section>
            <section>
                <h2>Notes:</h2>
                <div>
                    如果您需要鏈接到 Next.js 應用之外的外部連結頁面，只需使用不帶 Link 的 a 標籤。
                </div>
                <div>
                    如果您需要添加屬性，例如，className，請將其添加到 a 標籤，而非添加到 Link 標籤。
                </div>
            </section>
        </Layout>
    )
}

export default LinkComponent
