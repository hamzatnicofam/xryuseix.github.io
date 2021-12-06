import React from 'react'

import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Seo from '../../components/seo'

import './color.css'

interface ColorType {
  name: string
  code: string
}

type ColorsType = ColorType[]

const Colors: ColorsType = [
  { name: '黒', code: 'black' },
  { name: '白', code: 'white' },
  { name: '赤', code: 'red' },
  { name: '黄', code: 'yellow' }
]

/*
 * 背景色の切り替えを行う
 */
interface StateProps {
  full: boolean
  display: 'block' | 'none'
}

interface Document {
  exitFullscreen?: () => void
  querySelector: (selector: string) => HTMLElement | null
}

interface HTMLElement {
  style: React.CSSProperties
  requestFullscreen?: () => void
  querySelector: (selector: string) => HTMLElement | null
}

class ColorsSwitching extends React.Component<StateProps | {}, StateProps> {
  constructor(props: StateProps = { full: false, display: 'block' }) {
    super(props)
    this.state = {
      full: props.full,
      display: props.display
    }
  }

  /*
   * キーが押された時の処理
   */
  exitFullscreen(): void {
    if (this.state.full) {
      const document: Document = window.document
      // フルスクリーン元に戻す
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      this.setState({ full: false, display: 'block' })
      const elem: HTMLElement | null = document.querySelector('.color_body')
      if (elem != null) {
        elem.style.backgroundColor = 'white'
      }
    }
  }
  /*
   * キーが押された時のイベントハンドラ
   */
  handleKeyDown(): void {
    this.exitFullscreen()
  }
  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  /*
   * 背景色を変更
   */
  changeBackGrountColor(colorCode: string): void {
    const document: Document = window.document
    const elem: HTMLElement | null = document.querySelector('.color_body')
    if (elem != null) {
      elem.style.backgroundColor = colorCode
      // フルスクリーンにする
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      }
    }
    this.setState({ full: true, display: 'none' })
  }

  render() {
    return (
      <div className="color_body">
        <div style={{ display: this.state.display }}>
          {Colors.map((colorData) => (
            <button
              style={{ backgroundColor: colorData.code }}
              onClick={() => this.changeBackGrountColor(colorData.code)}
            >
              {colorData.name}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

interface ColorPageProps {
  location: Location
}

const ColorPageIndex: React.VFC<ColorPageProps> = (props: ColorPageProps) => {
  return (
    <Layout location={props.location}>
      <Seo title="Colors" description="Colors" />
      <Meta title="Colors" />
      <ColorsSwitching />
    </Layout>
  )
}
export default ColorPageIndex
