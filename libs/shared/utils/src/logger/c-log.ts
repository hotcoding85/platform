import * as util from 'util'

export const cLog = (
  ...objects: Array<boolean | number | object | string | null | undefined>
) => {
  objects.forEach((obj) =>
    console.log(
      util.inspect(obj, { colors: true, depth: null, showHidden: false }),
    ),
  )
}
