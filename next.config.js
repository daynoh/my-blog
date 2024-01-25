/** @type {import('next').NextConfig} */
// import { withContentlayer } from 'next-contentlayer'
const {withContentlayer} = require('next-contentlayer')

const nextConfig = {};

module.exports = withContentlayer({...nextConfig})

