/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerCnfig = {
      styledComponents: true,
    }

    if (process.env.NODE_ENV === 'production') {
      compilerCnfig = {
        ...compilerCnfig,
        reactRemoveProperties: {
          properties: ['^data-testid$'],
        },
      }
    }
    return compilerCnfig
  })(),
}

module.exports = nextConfig
