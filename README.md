
# 流水线状态

[![Build Status](https://travis-ci.org/lijinke666/react-devops-study.svg?branch=master)](https://travis-ci.org/lijinke666/react-devops-study)

# 测试覆盖率

![Codecov branch](https://img.shields.io/codecov/c/github/lijinke666/react-devops-study/master?style=flat-square)

# 依赖

- [`Travis CI`](https://travis-ci.org)  CI

```bash

  # 安装依赖
  yarn
  # 静态检查
  yarn lint
  # 跑测试
  yarn test
  # 覆盖率
  yarn ci:coverage
```

- [`Netlify`](https://www.netlify.com/) 自动部署,生成静态网站, 可以在 每次 `PR` 自动生成一个在线预览网址 (支持自定义域名)
- [`CodeCov`](https://codecov.io) 测试覆盖率 配合 `travis` 每次 push 代码自动更新测试覆盖率
- [`shields.io`](https://shields.io) 生成 覆盖率 流水线状态 徽章
- [`Github Actions`](https://github.com/lijinke666/react-devops-study/actions) Github 的 免费 CI

```bash
  yarn
  yarn lint
  yarn test
  yarn ci:coverage
```
- [`Docker`](https://cloud.docker.com) 在每次流水线打完包后, 构建 docker 镜像 发布到 docker 仓库, 服务器 push 这个镜像就可以自动部署
- [`Github Actions 环境变量配置`](https://github.com/lijinke666/react-devops-study/settings/secrets)
