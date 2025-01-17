/**
 * コンテンツを一括importして動的に呼び出せるようにする
 *
 * @format
 * @param reqContent require.contextの返り値
 */

type Items = {
  [k: string]: string;
};

const importAll: Function = (
  reqContent: __WebpackModuleApi.RequireContext
): Items => {
  let items: Items = {};
  reqContent
    .keys()
    .map((item: string) => (items[item.replace("./", "")] = reqContent(item)));
  return items;
};

export default importAll;
