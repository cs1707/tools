// import cssnanoPresetLite from "cssnano-preset-lite";
// import cssnanoPresetDefault from "cssnano-preset-default";
// import cssnanoPresetAdvanced from "cssnano-preset-advanced";
import postcss from "postcss";

export async function cssMinify(input: string) {
  const nanoPlugins = (await import("cssnano-preset-lite")).default().plugins;

  const postcssPlugins: (postcss.Processor | postcss.Plugin)[] = [];

  for (const plugin of nanoPlugins) {
    const [processor, opts] = plugin;
    if (
      typeof opts === "undefined" ||
      (typeof opts === "object" && !opts.exclude) ||
      (typeof opts === "boolean" && opts)
    ) {
      postcssPlugins.push(processor(opts));
    }
  }

  return new Promise<postcss.Result<postcss.Root>>((resolve, reject) => {
    postcss(postcssPlugins)
      .process(input, { from: undefined })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
