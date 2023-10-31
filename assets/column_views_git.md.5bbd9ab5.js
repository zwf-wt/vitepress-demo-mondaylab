import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.05cb957e.js";const l="/vitepress-demo-mondaylab/assets/git/分支合并流程图.png",h=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[],"relativePath":"column/views/git.md","filePath":"column/views/git.md"}'),p={name:"column/views/git.md"},t=e('<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h1><h2 id="分支命名" tabindex="-1">分支命名 <a class="header-anchor" href="#分支命名" aria-label="Permalink to &quot;分支命名&quot;">​</a></h2><h3 id="master-分支" tabindex="-1">master 分支 <a class="header-anchor" href="#master-分支" aria-label="Permalink to &quot;master 分支&quot;">​</a></h3><p>master 为主分支，也是用于部署生产环境的分支，需要确保master分支稳定性。master 分支一般由 release 以及 hotfix 分支合并，任何时间都不能直接修改代码。</p><h3 id="develop-分支" tabindex="-1">develop 分支 <a class="header-anchor" href="#develop-分支" aria-label="Permalink to &quot;develop 分支&quot;">​</a></h3><p>develop 为开发环境分支，始终保持最新完成以及bug修复后的代码，用于前后端联调。一般开发的新功能时，feature分支都是基于develop分支创建的。</p><h3 id="feature-分支" tabindex="-1">feature 分支 <a class="header-anchor" href="#feature-分支" aria-label="Permalink to &quot;feature 分支&quot;">​</a></h3><p>开发新功能时，以develop为基础创建feature分支。</p><p>分支命名时以 feature/ 开头，后面可以加上开发的功能模块， 命名示例：feature/user_module、feature/cart_module</p><h3 id="test分支" tabindex="-1">test分支 <a class="header-anchor" href="#test分支" aria-label="Permalink to &quot;test分支&quot;">​</a></h3><p>test为测试环境分支，外部用户无法访问，专门给测试人员使用，版本相对稳定。</p><h3 id="release分支" tabindex="-1">release分支 <a class="header-anchor" href="#release分支" aria-label="Permalink to &quot;release分支&quot;">​</a></h3><p>release 为预上线分支（预发布分支），UAT测试阶段使用。一般由 test 或 hotfix 分支合并，不建议直接在 release 分支上直接修改代码。</p><h3 id="hotfix-分支" tabindex="-1">hotfix 分支 <a class="header-anchor" href="#hotfix-分支" aria-label="Permalink to &quot;hotfix 分支&quot;">​</a></h3><p>线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支。修复完成后，需要合并到 master 分支和 develop 分支。</p><p>分支命名以hotfix/ 开头的为修复分支，它的命名规则与 feature 分支类似。</p><h2 id="分支与环境的关系" tabindex="-1">分支与环境的关系 <a class="header-anchor" href="#分支与环境的关系" aria-label="Permalink to &quot;分支与环境的关系&quot;">​</a></h2><p>在系统开发过程中常用的环境：</p><ul><li>DEV 环境（Development environment）：用于开发者调试使用</li><li>FAT环境（Feature Acceptance Test environment）：功能验收测试环境，用于测试环境下的软件测试者测试使用</li><li>UAT环境 （User Acceptance Test environment）：用户验收测试环境，用于生产环境下的软件测试者测试使用</li><li>PRO 环境（Production environment）：生产环境</li></ul><blockquote><p>对应关系:</p></blockquote><table><thead><tr><th>分支</th><th>功能</th><th>环境</th><th>可访问</th></tr></thead><tbody><tr><td>master</td><td>主分支，稳定版本</td><td>PRO</td><td>是</td></tr><tr><td>develop</td><td>开发分支，最新版本</td><td>DEV</td><td>是</td></tr><tr><td>feature</td><td>开发分支，实现新特性</td><td></td><td>是</td></tr><tr><td>test</td><td>测试分支，功能测试</td><td>FAT</td><td>是</td></tr><tr><td>release</td><td>预上线分支，发布新版本</td><td>UAT</td><td>是</td></tr><tr><td>hotfix</td><td>紧急修复分支，修复线上bug</td><td></td><td>否</td></tr></tbody></table><h2 id="分支合并流程规范" tabindex="-1">分支合并流程规范 <a class="header-anchor" href="#分支合并流程规范" aria-label="Permalink to &quot;分支合并流程规范&quot;">​</a></h2><p>业界常见的两大主分支（master、develop）、三个辅助分支（feature、release、hotfix）的生命周期： <img src="'+l+`" alt="分支合并流程图"></p><p>以上生命周期仅作参考，不同开发团队可能有不同的规范，可自行灵活定义。</p><p>例如我们团队在开发时，至少需要保证以下流程：</p><ul><li>develop 分支和 hotfix 分支，必须从 master 分支检出</li><li>由 develop 分支合并到 test 分支</li><li>功能测试无误后，由 test 分支合并到 release 分支</li><li>UAT测试通过后，由 release 分支合并到 master分支</li><li>对于工作量小的功能开发（工时小于1天），可以直接在devolop 分支进行开发，否则由 develop 分支检出 feature 分支进行开发，开发完后合并到develop 分支</li></ul><h2 id="git提交规范" tabindex="-1">Git提交规范 <a class="header-anchor" href="#git提交规范" aria-label="Permalink to &quot;Git提交规范&quot;">​</a></h2><p>Git commit message规范指提交代码时编写的规范注释，编写良好的Commit messages可以达到3个重要的目的：</p><ul><li>加快代码review的流程</li><li>帮助我们编写良好的版本发布日志</li><li>让之后的维护者了解代码里出现特定变化和feature被添加的原因</li></ul><h3 id="angular-git-commit-guidelines" tabindex="-1">Angular Git Commit Guidelines <a class="header-anchor" href="#angular-git-commit-guidelines" aria-label="Permalink to &quot;Angular Git Commit Guidelines&quot;">​</a></h3><p>业界应用的比较广泛的是Angular Git Commit Guidelines：</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;BLANK LINE&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;BLANK LINE&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;footer&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;BLANK LINE&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;BLANK LINE&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;footer&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>type：提交类型</li><li>scope：可选项，本次 commit 波及的范围</li><li>subject：简明扼要的阐述下本次 commit 的主旨，在Angular Git Commit Guidelines中强调了三点。使用祈使句，首字母不要大写，结尾无需添加标点</li><li>body: 同样使用祈使句，在主体内容中我们需要把本次 commit 详细的描述一下，比如此次变更的动机</li><li>footer: 描述下与之关联的 issue 或 break change</li></ul><h4 id="简易版" tabindex="-1">简易版 <a class="header-anchor" href="#简易版" aria-label="Permalink to &quot;简易版&quot;">​</a></h4><blockquote><p>Angular Git Commit Guidelines中推荐的type类型如下：</p></blockquote><ul><li>feat: 新增功能</li><li>fix: 修复bug</li><li>docs: 仅文档更改</li><li>style: 不影响代码含义的更改（空白、格式设置、缺失 分号等）</li><li>refactor: 既不修复bug也不添加特性的代码更改</li><li>perf: 改进性能的代码更改</li><li>test: 添加缺少的测试或更正现有测试</li><li>chore: 对构建过程或辅助工具和库（如文档）的更改</li></ul><blockquote><p>除此之外，还有一些常用的类型：</p></blockquote><ul><li>delete：删除功能或文件</li><li>modify：修改功能</li><li>build：改变构建流程，新增依赖库、工具等（例如webpack、gulp、npm修改）</li><li>test：测试用例的新增、修改</li><li>ci：自动化流程配置修改</li><li>revert：回滚到上一个版本</li></ul><blockquote><p>单次提交注意事项</p></blockquote><ul><li>提交问题必须为同一类别</li><li>提交问题不要超过3个</li><li>提交的commit发现不符合规范，git commit --amend -m &quot;新的提交信息&quot;或 git reset --hard HEAD 重新提交一次</li></ul><h2 id="配置-gitignore文件" tabindex="-1">配置.gitignore文件 <a class="header-anchor" href="#配置-gitignore文件" aria-label="Permalink to &quot;配置.gitignore文件&quot;">​</a></h2><p><code>.gitignore</code>是一份用于忽略不必提交的文件的列表，项目中可以根据实际需求统一<code>.gitignore</code>文件，减少不必要的文件提交和冲突，净化代码库环境。</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">HELP.md</span></span>
<span class="line"><span style="color:#e1e4e8;">target/</span></span>
<span class="line"><span style="color:#e1e4e8;">!.mvn/wrapper/maven-wrapper.jar</span></span>
<span class="line"><span style="color:#e1e4e8;">!**/src/main/**/target/</span></span>
<span class="line"><span style="color:#e1e4e8;">!**/src/test/**/target/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">### STS ###</span></span>
<span class="line"><span style="color:#e1e4e8;">.apt_generated</span></span>
<span class="line"><span style="color:#e1e4e8;">.classpath</span></span>
<span class="line"><span style="color:#e1e4e8;">.factorypath</span></span>
<span class="line"><span style="color:#e1e4e8;">.project</span></span>
<span class="line"><span style="color:#e1e4e8;">.settings</span></span>
<span class="line"><span style="color:#e1e4e8;">.springBeans</span></span>
<span class="line"><span style="color:#e1e4e8;">.sts4-cache</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">### IntelliJ IDEA ###</span></span>
<span class="line"><span style="color:#e1e4e8;">.idea</span></span>
<span class="line"><span style="color:#e1e4e8;">*.iws</span></span>
<span class="line"><span style="color:#e1e4e8;">*.iml</span></span>
<span class="line"><span style="color:#e1e4e8;">*.ipr</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">### NetBeans ###</span></span>
<span class="line"><span style="color:#e1e4e8;">/nbproject/private/</span></span>
<span class="line"><span style="color:#e1e4e8;">/nbbuild/</span></span>
<span class="line"><span style="color:#e1e4e8;">/dist/</span></span>
<span class="line"><span style="color:#e1e4e8;">/nbdist/</span></span>
<span class="line"><span style="color:#e1e4e8;">/.nb-gradle/</span></span>
<span class="line"><span style="color:#e1e4e8;">build/</span></span>
<span class="line"><span style="color:#e1e4e8;">!**/src/main/**/build/</span></span>
<span class="line"><span style="color:#e1e4e8;">!**/src/test/**/build/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">### VS Code ###</span></span>
<span class="line"><span style="color:#e1e4e8;">.vscode/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Log file</span></span>
<span class="line"><span style="color:#e1e4e8;">*.log</span></span>
<span class="line"><span style="color:#e1e4e8;">/logs*</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># BlueJ files</span></span>
<span class="line"><span style="color:#e1e4e8;">*.ctxt</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Mobile Tools for Java (J2ME)</span></span>
<span class="line"><span style="color:#e1e4e8;">.mtj.tmp/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Package Files #</span></span>
<span class="line"><span style="color:#e1e4e8;">*.jar</span></span>
<span class="line"><span style="color:#e1e4e8;">*.war</span></span>
<span class="line"><span style="color:#e1e4e8;">*.ear</span></span>
<span class="line"><span style="color:#e1e4e8;">*.zip</span></span>
<span class="line"><span style="color:#e1e4e8;">*.tar.gz</span></span>
<span class="line"><span style="color:#e1e4e8;">*.rar</span></span>
<span class="line"><span style="color:#e1e4e8;">*.cmd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">HELP.md</span></span>
<span class="line"><span style="color:#24292e;">target/</span></span>
<span class="line"><span style="color:#24292e;">!.mvn/wrapper/maven-wrapper.jar</span></span>
<span class="line"><span style="color:#24292e;">!**/src/main/**/target/</span></span>
<span class="line"><span style="color:#24292e;">!**/src/test/**/target/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### STS ###</span></span>
<span class="line"><span style="color:#24292e;">.apt_generated</span></span>
<span class="line"><span style="color:#24292e;">.classpath</span></span>
<span class="line"><span style="color:#24292e;">.factorypath</span></span>
<span class="line"><span style="color:#24292e;">.project</span></span>
<span class="line"><span style="color:#24292e;">.settings</span></span>
<span class="line"><span style="color:#24292e;">.springBeans</span></span>
<span class="line"><span style="color:#24292e;">.sts4-cache</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### IntelliJ IDEA ###</span></span>
<span class="line"><span style="color:#24292e;">.idea</span></span>
<span class="line"><span style="color:#24292e;">*.iws</span></span>
<span class="line"><span style="color:#24292e;">*.iml</span></span>
<span class="line"><span style="color:#24292e;">*.ipr</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### NetBeans ###</span></span>
<span class="line"><span style="color:#24292e;">/nbproject/private/</span></span>
<span class="line"><span style="color:#24292e;">/nbbuild/</span></span>
<span class="line"><span style="color:#24292e;">/dist/</span></span>
<span class="line"><span style="color:#24292e;">/nbdist/</span></span>
<span class="line"><span style="color:#24292e;">/.nb-gradle/</span></span>
<span class="line"><span style="color:#24292e;">build/</span></span>
<span class="line"><span style="color:#24292e;">!**/src/main/**/build/</span></span>
<span class="line"><span style="color:#24292e;">!**/src/test/**/build/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### VS Code ###</span></span>
<span class="line"><span style="color:#24292e;">.vscode/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Log file</span></span>
<span class="line"><span style="color:#24292e;">*.log</span></span>
<span class="line"><span style="color:#24292e;">/logs*</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># BlueJ files</span></span>
<span class="line"><span style="color:#24292e;">*.ctxt</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Mobile Tools for Java (J2ME)</span></span>
<span class="line"><span style="color:#24292e;">.mtj.tmp/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Package Files #</span></span>
<span class="line"><span style="color:#24292e;">*.jar</span></span>
<span class="line"><span style="color:#24292e;">*.war</span></span>
<span class="line"><span style="color:#24292e;">*.ear</span></span>
<span class="line"><span style="color:#24292e;">*.zip</span></span>
<span class="line"><span style="color:#24292e;">*.tar.gz</span></span>
<span class="line"><span style="color:#24292e;">*.rar</span></span>
<span class="line"><span style="color:#24292e;">*.cmd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><blockquote><p>此外，还有一些其他建议：</p></blockquote><ul><li>master 分支的每一次更新，都建议打 tag 添加标签，通常为对应版本号，便于管理</li><li>feature分支、hotfix分支在合并后可以删除，避免分支过多管理混乱</li><li>每次 pull 代码前，提交本地代码到本地库中，否则可能回出现合并代码出错，导致代码丢失</li></ul>`,46),r=[t];function i(o,c,d,b,u,m){return a(),n("div",null,r)}const g=s(p,[["render",i]]);export{h as __pageData,g as default};
