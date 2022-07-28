日本百名山

<p align="center">
  <a href="https://famous-mountains-in-japan.web.app/">
    <img width="70%" src="https://github.com/ryunosuke0922/kongo/blob/master/public/images/img04.jpg" />
  </a>
</p>

<h1 align="center">日本百名山のデータ</h1>

## Install💎

```bash
yarn add --dev git+https://github.com/ryunosuke0922/famous-mountains-in-japan.git
```

Or

```bash
npm install --save-dev git+https://github.com/ryunosuke0922/famous-mountains-in-japan.git
```

[React example](https://github.com/ryunosuke0922/kongo/blob/master/src/pages/index.tsx)


## 例🚀

使用リポジトリ
https://github.com/ryunosuke0922/kongo

```js
import { get100FamousMountainsInJapan } from 'famous-mountains-in-japan'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      {get100FamousMountainsInJapan().map((e) => (
        <div key={e.no}>
          <p data={e}></p>
        </div>
      ))}
    </>
  )
}

export default Home
```

[サイト](https://famous-mountains-in-japan.web.app/)

## Lisence👩🏻‍⚖️ 

This project is licensed under the MIT License, see the [LICENSE](https://github.com/ryunosuke0922/kongo/blob/master/LICENSE) file for details
