import React from "react";
import { MdOpenInNew } from "react-icons/md";

import IPAVulnList from "./vulnList";

export type ContentProp = {
  year: string | number;
  detail: string | JSX.Element;
  url: string;
};

export type ContentProps = ContentProp[];

export const SchoolData: ContentProps = [
  {
    year: "2013-2019",
    detail: "神奈川県立平塚中等教育学校",
    url: "https://www.pen-kanagawa.ed.jp/hiratsuka-chuto-ss/",
  },
  {
    year: "2019-2023",
    detail: (
      <>
        立命館大学 情報理工学部 セキュリティ・ネットワークコース
        <details>
          <summary>詳細</summary>
          <table className="achievement_min-table">
            <tr>
              <td className="achievement_min-table-title">入試方式</td>{" "}
              <td className="achievement_min-table-content">
                AO入試
                <details className="achievement_details">
                  <summary>提出した自作ソフトウェア</summary>
                  <ul>
                    <li>暗号化ソフトウェア</li>
                    <li>
                      シーザー暗号, ADFGVX暗号, ワンタイムパッド, 自作暗号である
                      <a
                        href="https://github.com/xryuseix/cubing_cipher"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        cubing暗号
                        <MdOpenInNew />
                      </a>
                      を暗号化・復号できるソフトウェア(現在の仕様と大幅に異なる)
                    </li>
                  </ul>
                </details>
              </td>
            </tr>
            <tr>
              <td className="achievement_min-table-title">サークル</td>{" "}
              <td className="achievement_min-table-content">
                <ul>
                  <li>情報理工学部プロジェクト団体 RiPPro 2020年度団体長</li>
                  <li>情報理工学部プロジェクト団体 RiST 2020年度副団体長</li>
                </ul>
              </td>
            </tr>
          </table>
        </details>
      </>
    ),
    url: "http://www.ritsumei.ac.jp/",
  },
  {
    year: "2023-",
    detail:
      "立命館大学大学院 情報理工学研究科 博士課程前期課程 計算機科学コ―ス",
    url: "http://www.ritsumei.ac.jp/",
  },
];

const WorkData: ContentProps = [
  {
    year: "2018",
    detail: "総務省 地域におけるIoTの学び推進事業地域実証事業 メンター",
    url: "https://www.soumu.go.jp/main_content/000605601.pdf",
  },
  {
    year: "2020-2023",
    detail: "paiza株式会社 学習事業部 アルバイト",
    url: "https://www.paiza.co.jp/",
  },
  {
    year: "2021",
    detail: "デロイト トーマツ サイバー合同会社 3daysインターンシップ",
    url: "https://www.onecareer.jp/events/23881",
  },
  {
    year: "2021",
    detail: "NTT東日本 夏季DS/DX/セキュリティ 5daysインターンシップ",
    url: "https://www.ntt-east.co.jp/recruit/internship-tech/",
  },
  {
    year: "2021-",
    detail: "株式会社リチェルカセキュリティ アルバイト",
    url: "https://ricsec.co.jp/",
  },
];

const EventData: ContentProps = [
  {
    year: "2019",
    detail: "セキュリティ・キャンプ全国大会2019 集中開発コース 暗号化通信ゼミ",
    url: "https://www.ipa.go.jp/jinzai/camp/2019/zenkoku2019_vote.html",
  },
  {
    year: "2020-2021",
    detail:
      "若手セキュリティイノベーター育成プログラム SecHack365 研究駆動コース",
    url: "https://sechack365.nict.go.jp/",
  },
  {
    year: 2020,
    detail: (
      <>
        AVTOKYO 2020 Talks
        <details className="achievement_details">
          <summary>発表テーマ</summary>
          <ul>
            <li>
              [jp] ビデオチャットの映像から部屋が盗み見られる！？
              バーチャル背景適用済み映像から部屋の画像を復元する手法とその自動化
              (石川 琉聖, 辻 知希)
            </li>
          </ul>
        </details>
      </>
    ),
    url: "https://www.avtokyo.org/2020",
  },
  {
    year: 2021,
    detail: (
      <>
        情報通信システムセキュリティ研究会（ICSS）
        <details className="achievement_details">
          <summary>研究テーマ</summary>
          <ul>
            <li>
              <a href="https://www.ieice.org/iss/icss/award.html">
                <img
                  src="https://img.shields.io/badge/ICSS研究賞-2020-E3C96F"
                  alt="ICSS badge"
                />
              </a>
              「仮想背景を使用したリモート会議映像における秘匿された背景の再構築手法」
              ○辻知希,
              石川琉聖（立命館大）・衛藤将史（NICT）・服部祐一（セキュアサイクル）・井上博之（広島市大）
            </li>
            <li>
              「プログラミングコンテストにおけるソースコードの盗作検知手法の実装と評価」
              ○石川琉聖（立命館大）・服部祐一（セキュアサイクル）・井上博之（広島市大）・猪俣敦夫（阪大）
            </li>
          </ul>
        </details>
      </>
    ),
    url: "https://www.ieice.org/ken/program/index.php?tgs_regid=4674e49d7365cbd99b30867d8c415e9417ba71c10dcd35acf8e0ca9a9d813f1b&tgid=IEICE-ICSS",
  },
  {
    year: "2021",
    detail: "ICPC アジア地区横浜大会",
    url: "https://icpc.iisf.or.jp/2020-yokohama/domestic",
  },
  {
    year: 2023,
    detail: (
      <>
        情報通信システムセキュリティ研究会（ICSS）
        <details className="achievement_details">
          <summary>研究テーマ</summary>
          <ul>
            <li>
              「複数のWebサービスのパスワードリカバリ機能を用いた通知先情報復元攻撃の検証およびその対策」
              ○石川琉聖・穐山空道（立命館大）・猪俣敦夫（立命館大/阪大）・上原哲太郎（立命館大）
            </li>
          </ul>
        </details>
      </>
    ),
    url: "https://ken.ieice.org/ken/program/index.php?tgs_regid=4dbca89c40ccf350de377acdbe8b34d0e98fdeb4007a8025dc545f315741fb1a&tgid=IEICE-ICSS",
  },
];

const MediaData: ContentProps = [
  {
    year: "2021",
    detail:
      "サイバーセキュリティⅡ 第 2 回 情報セキュリティ教育と人材育成 BS231ch",
    url: "https://www.ouj.ac.jp/hp/o_itiran/2021/0205.html",
  },
];

const HackData: ContentProps = [
  {
    year: "2020-",
    detail: (
      <>
        IPA 脆弱性関連情報届出受理 <IPAVulnList type="num" />件
        <details className="achievement_details">
          <summary>取得番号一覧</summary>
          <div>
            <IPAVulnList type="list" />
          </div>
        </details>
      </>
    ),
    url: "https://www.ipa.go.jp/security/vuln/report",
  },
];

const QualificationData: ContentProps = [
  {
    year: "2017",
    detail: "ITパスポート",
    url: "https://www3.jitec.ipa.go.jp/JitesCbt/index.html",
  },
  {
    year: "2017",
    detail: "実用数学技能検定 2級",
    url: "https://www.su-gaku.net/suken/",
  },
  {
    year: "2018",
    detail: "応用情報技術者",
    url: "https://www.jitec.ipa.go.jp/1_11seido/ap.html",
  },
  {
    year: "2020",
    detail: "TOEIC 610点",
    url: "https://www.iibc-global.org/toeic.html",
  },
  {
    year: "2021",
    detail: "2級鍵師技能検定",
    url: "https://www.kagishi.com/examination/kagishi2",
  },
];

export type ContentsProps = {
  title: string;
  content: ContentProps;
};

const AchievementData: ContentsProps[] = [
  { title: "School", content: SchoolData },
  { title: "Work", content: WorkData },
  { title: "Event", content: EventData },
  { title: "Media", content: MediaData },
  { title: "Hack", content: HackData },
  { title: "Qualification", content: QualificationData },
];

export default AchievementData;
