import liff from '@line/liff'

const setupLiff = () => {
  liff
    .init({
      liffId: '1656404229-Eq839qLW',
    })
    .catch((err) => {
      throw err
    })
}

setupLiff()
