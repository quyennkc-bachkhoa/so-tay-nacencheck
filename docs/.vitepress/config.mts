import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { markdownPlugins } from './markdown'

const SRC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
export const APP_BASE = 'https://trace.nacencheck.com'

// Danh sách chương lấy từ frontmatter, sắp theo `order`. Dùng cho nút Chương trước / Chương sau.
type Chapter = { link: string; title: string; order: number; file: string }
function readChapters(): Chapter[] {
  const out: Chapter[] = []
  for (const dir of fs.readdirSync(SRC, { withFileTypes: true })) {
    if (!dir.isDirectory() || dir.name.startsWith('.') || dir.name === 'public') continue
    for (const f of fs.readdirSync(path.join(SRC, dir.name))) {
      if (!f.endsWith('.md')) continue
      const raw = fs.readFileSync(path.join(SRC, dir.name, f), 'utf8')
      const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ''
      const title = fm.match(/^title:\s*(.+)$/m)?.[1].trim() ?? f
      const order = Number(fm.match(/^order:\s*(\d+)/m)?.[1] ?? 99)
      out.push({ link: `/${dir.name}/${f.replace(/\.md$/, '')}`, title, order, file: `${dir.name}/${f}` })
    }
  }
  return out.sort((a, b) => a.order - b.order)
}
const chapters = readChapters()

// Thời gian đọc ước tính: khoảng 200 từ/phút.
function readingMinutes(file: string) {
  const raw = fs.readFileSync(path.join(SRC, file), 'utf8').replace(/^---[\s\S]*?---/, '')
  const words = raw.replace(/[#>*`|_\-[\]()!]/g, ' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export default defineConfig({
  lang: 'vi-VN',
  title: 'Hướng dẫn sử dụng NacenCheck',
  description: 'Sổ tay hướng dẫn sử dụng trang quản trị NacenCheck cho người mới',
  // Repo GitHub Pages: https://quyennkc-bachkhoa.github.io/so-tay-nacencheck/
  base: '/so-tay-nacencheck/',
  cleanUrls: true,
  srcExclude: ['_goi-y-sua-noi-dung.md'],
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap' }],
    ['link', { rel: 'icon', href: '/so-tay-nacencheck/favicon.svg', type: 'image/svg+xml' }],
  ],

  markdown: {
    config: (md) => markdownPlugins(md, { appBase: APP_BASE }),
  },

  transformPageData(pageData) {
    const i = chapters.findIndex((c) => c.file === pageData.relativePath)
    if (i < 0) return
    const fm = pageData.frontmatter
    fm.prev = i > 0 ? { text: chapters[i - 1].title, link: chapters[i - 1].link } : false
    fm.next = i < chapters.length - 1 ? { text: chapters[i + 1].title, link: chapters[i + 1].link } : false
    fm.readingMinutes = readingMinutes(pageData.relativePath)
  },

  themeConfig: {
    // Menu ngang 5 nhóm (vẽ bởi SiteHeader.vue). Không có sidebar.
    nav: [
      { text: 'Trang chủ', link: '/', activeMatch: '^/$' },
      { text: 'Mở đầu', link: '/mo-dau/00-gioi-thieu', activeMatch: '^/mo-dau/' },
      { text: 'Bắt đầu', link: '/bat-dau/02-dang-nhap-va-giao-dien', activeMatch: '^/bat-dau/' },
      { text: 'Luồng chính', link: '/luong-chinh/03-thiet-lap-doanh-nghiep', activeMatch: '^/luong-chinh/' },
      { text: 'Mở rộng', link: '/mo-rong/12-tinh-nang-bo-sung', activeMatch: '^/mo-rong/' },
      { text: 'Hỗ trợ', link: '/ho-tro/13-cau-hoi-thuong-gap', activeMatch: '^/ho-tro/' },
    ],
    outline: { level: 2, label: 'Trên trang này' },
    docFooter: { prev: 'Chương trước', next: 'Chương sau' },
    returnToTopLabel: 'Lên đầu trang',
    darkModeSwitchLabel: 'Giao diện',
    lightModeSwitchTitle: 'Chuyển sang giao diện sáng',
    darkModeSwitchTitle: 'Chuyển sang giao diện tối',
    notFound: {
      title: 'KHÔNG TÌM THẤY TRANG',
      quote: 'Đường dẫn này không có trong sổ tay.',
      linkLabel: 'về trang chủ',
      linkText: 'Về trang chủ',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Tìm kiếm', buttonAriaLabel: 'Tìm kiếm trong sổ tay' },
          modal: {
            displayDetails: 'Hiện chi tiết',
            resetButtonTitle: 'Xóa từ khóa',
            backButtonTitle: 'Đóng tìm kiếm',
            noResultsText: 'Không có kết quả cho',
            footer: {
              selectText: 'mở',
              selectKeyAriaLabel: 'Enter',
              navigateText: 'di chuyển',
              navigateUpKeyAriaLabel: 'mũi tên lên',
              navigateDownKeyAriaLabel: 'mũi tên xuống',
              closeText: 'đóng',
              closeKeyAriaLabel: 'Esc',
            },
          },
        },
      },
    },
  },
})
