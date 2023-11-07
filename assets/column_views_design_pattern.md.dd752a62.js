import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.05cb957e.js";const m=JSON.parse('{"title":"设计模式","description":"","frontmatter":{},"headers":[],"relativePath":"column/views/design_pattern.md","filePath":"column/views/design_pattern.md"}'),p={name:"column/views/design_pattern.md"},o=l(`<h1 id="设计模式" tabindex="-1">设计模式 <a class="header-anchor" href="#设计模式" aria-label="Permalink to &quot;设计模式&quot;">​</a></h1><h2 id="_1-创建型模式" tabindex="-1">1. 创建型模式 <a class="header-anchor" href="#_1-创建型模式" aria-label="Permalink to &quot;1. 创建型模式&quot;">​</a></h2><h3 id="_1-1-建造型模式" tabindex="-1">1.1 建造型模式 <a class="header-anchor" href="#_1-1-建造型模式" aria-label="Permalink to &quot;1.1 建造型模式&quot;">​</a></h3><blockquote><p>建造者模式是一种创建型设计模式，它可以将复杂对象的创建过程封装起来，让用户能够逐步构造一个对象，同时保持灵活性。该模式适用于那些需要通过特定的顺序或算法来创建对象的情况，并且该对象可能有多种属性和配置选项，让用户能够自由组合和定制属性以满足不同的需求。</p></blockquote><blockquote><p>建造者模式的核心思想是将对象的构造过程分解成多个简单而相互独立的步骤，然后通过一个指挥者（Director）来指导这些步骤的顺序与组合方式以构建最终对象。具体来说，该模式通常包含以下几个角色：</p><blockquote><ol><li>Builder：抽象建造者角色，定义了创建一个产品对象所需的各个组成部分的抽象接口，以及组合这些部件的方法。</li><li>ConcreteBuilder：具体建造者角色，实现 Builder 接口来构造和装配各个部件，具体实现当中通常包括一个 Builder 对象和各个属性的赋值方法。</li><li>Director：指挥者角色，负责统一组织建造者中定义的步骤来构造最终的对象，也可以根据具体需求来定义不同的组合方式。</li><li>Product：产品角色，具体构造出来的复杂对象，通常包括多个组成部分和属性。</li></ol></blockquote></blockquote><blockquote><p>使用建造者模式可以将复杂对象的创建过程简化，减少用户的细节操作，同时也提供了一种灵活的方式来组合和定制对象的属性，从而让用户能够更加自由地构造出所需的对象。</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 当运用建造者模式时，让我们考虑一个例子：创建一个电脑对象。</span></span>
<span class="line"><span style="color:#6A737D;"> * 电脑对象通常由多个部件组成，例如处理器、内存、硬盘等，</span></span>
<span class="line"><span style="color:#6A737D;"> * 而每个部件可能有不同的配置选项。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 产品角色（Product）</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Computer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.processor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.memory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.hardDisk </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置处理器</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setProcessor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">processor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.processor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> processor;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置内存</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">memory</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.memory </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> memory;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置硬盘</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setHardDisk</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">hardDisk</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.hardDisk </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> hardDisk;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 显示电脑配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">showConfiguration</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Computer Configuration:&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Processor:&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.processor);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Memory:&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.memory);</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hard Disk:&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.hardDisk);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 抽象建造者角色（Builder）</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ComputerBuilder</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Computer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置处理器</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setProcessor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">processor</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer.</span><span style="color:#B392F0;">setProcessor</span><span style="color:#E1E4E8;">(processor);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置内存</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">memory</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer.</span><span style="color:#B392F0;">setMemory</span><span style="color:#E1E4E8;">(memory);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置硬盘</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setHardDisk</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">hardDisk</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer.</span><span style="color:#B392F0;">setHardDisk</span><span style="color:#E1E4E8;">(hardDisk);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取构建完成的电脑</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getComputer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体建造者角色（Concrete Builder）</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GamingComputerBuilder</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ComputerBuilder</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置处理器（针对游戏电脑的特殊处理器）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setProcessor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer.</span><span style="color:#B392F0;">setProcessor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;High-end Gaming Processor&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置内存（针对游戏电脑的特殊内存）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setMemory</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer.</span><span style="color:#B392F0;">setMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;16GB DDR4 RAM&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置硬盘（针对游戏电脑的特殊硬盘）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setHardDisk</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer.</span><span style="color:#B392F0;">setHardDisk</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1TB SSD&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体建造者角色（Concrete Builder）</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OfficeComputerBuilder</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ComputerBuilder</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">super</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置处理器（针对办公电脑的特殊处理器）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setProcessor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer.</span><span style="color:#B392F0;">setProcessor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Standard Processor&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置内存（针对办公电脑的特殊内存）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setMemory</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer.</span><span style="color:#B392F0;">setMemory</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;8GB DDR4 RAM&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 设置硬盘（针对办公电脑的特殊硬盘）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setHardDisk</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.computer.</span><span style="color:#B392F0;">setHardDisk</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;500GB HDD&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 指挥者角色（Director）</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ComputerDirector</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">builder</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.builder </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> builder;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 构建电脑</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">buildComputer</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.builder.</span><span style="color:#B392F0;">setProcessor</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.builder.</span><span style="color:#B392F0;">setMemory</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.builder.</span><span style="color:#B392F0;">setHardDisk</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.builder.</span><span style="color:#B392F0;">getComputer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测试代码</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gamingBuilder</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GamingComputerBuilder</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">officeBuilder</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OfficeComputerBuilder</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">director</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ComputerDirector</span><span style="color:#E1E4E8;">(gamingBuilder);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gamingComputer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> director.</span><span style="color:#B392F0;">buildComputer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">gamingComputer.</span><span style="color:#B392F0;">showConfiguration</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;----------------------------------&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">director.builder </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> officeBuilder;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">officeComputer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> director.</span><span style="color:#B392F0;">buildComputer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">officeComputer.</span><span style="color:#B392F0;">showConfiguration</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Computer Configuration:</span></span>
<span class="line"><span style="color:#6A737D;"> * Processor: High-end Gaming Processor</span></span>
<span class="line"><span style="color:#6A737D;"> * Memory: 16GB DDR4 RAM</span></span>
<span class="line"><span style="color:#6A737D;"> * Hard Disk: 1TB SSD</span></span>
<span class="line"><span style="color:#6A737D;"> * ----------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"> * Computer Configuration:</span></span>
<span class="line"><span style="color:#6A737D;"> * Processor: Standard Processor</span></span>
<span class="line"><span style="color:#6A737D;"> * Memory: 8GB DDR4 RAM</span></span>
<span class="line"><span style="color:#6A737D;"> * Hard Disk: 500GB HDD</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * 在上述示例中，我们首先定义了产品角色 Computer，</span></span>
<span class="line"><span style="color:#6A737D;"> * 它代表了最终构建的电脑对象，并提供了设置各个部件和显示配置的方法。</span></span>
<span class="line"><span style="color:#6A737D;"> * 然后，我们定义了抽象建造者角色 ComputerBuilder，</span></span>
<span class="line"><span style="color:#6A737D;"> * 它包含了设置各个部件的抽象方法，并且提供了获取构建完成的电脑对象的方法。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 当运用建造者模式时，让我们考虑一个例子：创建一个电脑对象。</span></span>
<span class="line"><span style="color:#6A737D;"> * 电脑对象通常由多个部件组成，例如处理器、内存、硬盘等，</span></span>
<span class="line"><span style="color:#6A737D;"> * 而每个部件可能有不同的配置选项。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 产品角色（Product）</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Computer</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.processor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.memory </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.hardDisk </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置处理器</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setProcessor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">processor</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.processor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> processor;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置内存</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setMemory</span><span style="color:#24292E;">(</span><span style="color:#E36209;">memory</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.memory </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> memory;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置硬盘</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setHardDisk</span><span style="color:#24292E;">(</span><span style="color:#E36209;">hardDisk</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.hardDisk </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> hardDisk;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 显示电脑配置</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">showConfiguration</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Computer Configuration:&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Processor:&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.processor);</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Memory:&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.memory);</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hard Disk:&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.hardDisk);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 抽象建造者角色（Builder）</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ComputerBuilder</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Computer</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置处理器</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setProcessor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">processor</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer.</span><span style="color:#6F42C1;">setProcessor</span><span style="color:#24292E;">(processor);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置内存</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setMemory</span><span style="color:#24292E;">(</span><span style="color:#E36209;">memory</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer.</span><span style="color:#6F42C1;">setMemory</span><span style="color:#24292E;">(memory);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置硬盘</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setHardDisk</span><span style="color:#24292E;">(</span><span style="color:#E36209;">hardDisk</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer.</span><span style="color:#6F42C1;">setHardDisk</span><span style="color:#24292E;">(hardDisk);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取构建完成的电脑</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getComputer</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体建造者角色（Concrete Builder）</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GamingComputerBuilder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ComputerBuilder</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置处理器（针对游戏电脑的特殊处理器）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setProcessor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer.</span><span style="color:#6F42C1;">setProcessor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;High-end Gaming Processor&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置内存（针对游戏电脑的特殊内存）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setMemory</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer.</span><span style="color:#6F42C1;">setMemory</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;16GB DDR4 RAM&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置硬盘（针对游戏电脑的特殊硬盘）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setHardDisk</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer.</span><span style="color:#6F42C1;">setHardDisk</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1TB SSD&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体建造者角色（Concrete Builder）</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OfficeComputerBuilder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ComputerBuilder</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">super</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置处理器（针对办公电脑的特殊处理器）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setProcessor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer.</span><span style="color:#6F42C1;">setProcessor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Standard Processor&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置内存（针对办公电脑的特殊内存）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setMemory</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer.</span><span style="color:#6F42C1;">setMemory</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;8GB DDR4 RAM&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 设置硬盘（针对办公电脑的特殊硬盘）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setHardDisk</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.computer.</span><span style="color:#6F42C1;">setHardDisk</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;500GB HDD&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 指挥者角色（Director）</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ComputerDirector</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">builder</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.builder </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> builder;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 构建电脑</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">buildComputer</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.builder.</span><span style="color:#6F42C1;">setProcessor</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.builder.</span><span style="color:#6F42C1;">setMemory</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.builder.</span><span style="color:#6F42C1;">setHardDisk</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.builder.</span><span style="color:#6F42C1;">getComputer</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 测试代码</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gamingBuilder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GamingComputerBuilder</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">officeBuilder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OfficeComputerBuilder</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">director</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ComputerDirector</span><span style="color:#24292E;">(gamingBuilder);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gamingComputer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> director.</span><span style="color:#6F42C1;">buildComputer</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">gamingComputer.</span><span style="color:#6F42C1;">showConfiguration</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;----------------------------------&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">director.builder </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> officeBuilder;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">officeComputer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> director.</span><span style="color:#6F42C1;">buildComputer</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">officeComputer.</span><span style="color:#6F42C1;">showConfiguration</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Computer Configuration:</span></span>
<span class="line"><span style="color:#6A737D;"> * Processor: High-end Gaming Processor</span></span>
<span class="line"><span style="color:#6A737D;"> * Memory: 16GB DDR4 RAM</span></span>
<span class="line"><span style="color:#6A737D;"> * Hard Disk: 1TB SSD</span></span>
<span class="line"><span style="color:#6A737D;"> * ----------------------------------</span></span>
<span class="line"><span style="color:#6A737D;"> * Computer Configuration:</span></span>
<span class="line"><span style="color:#6A737D;"> * Processor: Standard Processor</span></span>
<span class="line"><span style="color:#6A737D;"> * Memory: 8GB DDR4 RAM</span></span>
<span class="line"><span style="color:#6A737D;"> * Hard Disk: 500GB HDD</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * 在上述示例中，我们首先定义了产品角色 Computer，</span></span>
<span class="line"><span style="color:#6A737D;"> * 它代表了最终构建的电脑对象，并提供了设置各个部件和显示配置的方法。</span></span>
<span class="line"><span style="color:#6A737D;"> * 然后，我们定义了抽象建造者角色 ComputerBuilder，</span></span>
<span class="line"><span style="color:#6A737D;"> * 它包含了设置各个部件的抽象方法，并且提供了获取构建完成的电脑对象的方法。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br></div></div><h2 id="_2-结构型模式" tabindex="-1">2. 结构型模式 <a class="header-anchor" href="#_2-结构型模式" aria-label="Permalink to &quot;2. 结构型模式&quot;">​</a></h2><h2 id="_3-行为型模式" tabindex="-1">3. 行为型模式 <a class="header-anchor" href="#_3-行为型模式" aria-label="Permalink to &quot;3. 行为型模式&quot;">​</a></h2><h3 id="_3-1-模板方法模式" tabindex="-1">3.1 模板方法模式 <a class="header-anchor" href="#_3-1-模板方法模式" aria-label="Permalink to &quot;3.1 模板方法模式&quot;">​</a></h3><blockquote><p>在软件工程的设计模式中，模板方法模式是一种行为型设计模式。它允许开发者定义一个算法的整体结构，同时允许子类在不改变算法结构的情况下重新定义算法中的某些步骤。</p></blockquote><blockquote><p>模板方法模式通过定义一个抽象类，该抽象类包含一个称为模板方法的操作，该方法定义了算法的基本结构，包括算法的各个步骤和它们的顺序。这些步骤可以是抽象的，也可以具有默认的实现。子类可以覆盖这些抽象方法或者改变默认的实现来实现自己的行为。</p></blockquote><blockquote><p>模板方法模式的核心思想是在父类中定义一个算法的框架，具体的步骤由子类来实现。这样可以提高代码的复用性和可维护性，同时允许不同的子类实现不同的行为，但又保持了算法的整体结构。</p></blockquote><blockquote><p>模板方法模式常用于具有相似算法结构但具有不同实现细节的情况下，例如，某个算法的流程相同，但具体的步骤实现可能因为不同的业务需求而有所差异。通过使用模板方法模式，可以避免代码重复和冗余，并提高代码的灵活性和可扩展性。</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 抽象类 AbstractClass</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AbstractClass</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">executeAlgorithm</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stepOne</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stepTwo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stepThree</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">concreteMethod</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">stepOne</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;AbstractClass.stepOne() is called.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">stepTwo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;AbstractClass.stepTwo() is called.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">stepThree</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;AbstractClass.stepThree() is called.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">concreteMethod</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Abstract method: concreteMethod() is not implemented.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体类 ConcreteClass1</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConcreteClass1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AbstractClass</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">concreteMethod</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ConcreteClass1.concreteMethod() is called.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体类 ConcreteClass2</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConcreteClass2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AbstractClass</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">concreteMethod</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;ConcreteClass2.concreteMethod() is called.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 客户端代码</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">concrete1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConcreteClass1</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">concrete2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConcreteClass2</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">concrete1.</span><span style="color:#B392F0;">executeAlgorithm</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">concrete2.</span><span style="color:#B392F0;">executeAlgorithm</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 在上面的示例中，AbstractClass 是一个抽象类，</span></span>
<span class="line"><span style="color:#6A737D;"> * 它定义了一个模板方法 executeAlgorithm() </span></span>
<span class="line"><span style="color:#6A737D;"> * 和三个抽象方法 stepOne()、stepTwo()、stepThree()。</span></span>
<span class="line"><span style="color:#6A737D;"> * executeAlgorithm() 方法是该设计模式的核心，它提供了模板方法的骨架，</span></span>
<span class="line"><span style="color:#6A737D;"> * 其中调用了三个抽象方法和一个具体方法 concreteMethod()。</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * 具体类 ConcreteClass1 和 ConcreteClass2 </span></span>
<span class="line"><span style="color:#6A737D;"> * 继承自 AbstractClass 并实现了 concreteMethod() 方法，</span></span>
<span class="line"><span style="color:#6A737D;"> * 在执行模板方法时，它们将重写掉父类中定义的抽象方法，</span></span>
<span class="line"><span style="color:#6A737D;"> * 从而实现了自己的具体行为。</span></span>
<span class="line"><span style="color:#6A737D;"> * 在客户端代码中，我们创建了两个具体类的实例，</span></span>
<span class="line"><span style="color:#6A737D;"> * 然后通过调用它们的 executeAlgorithm() 方法来执行模板方法。</span></span>
<span class="line"><span style="color:#6A737D;"> * 当执行完模板方法后，ConcreteClass1 和 ConcreteClass2 的具体方法都会被调用，</span></span>
<span class="line"><span style="color:#6A737D;"> * 从而实现了它们各自的行为。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 抽象类 AbstractClass</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AbstractClass</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">executeAlgorithm</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stepOne</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stepTwo</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stepThree</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">concreteMethod</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">stepOne</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;AbstractClass.stepOne() is called.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">stepTwo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;AbstractClass.stepTwo() is called.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">stepThree</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;AbstractClass.stepThree() is called.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">concreteMethod</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Abstract method: concreteMethod() is not implemented.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体类 ConcreteClass1</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConcreteClass1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AbstractClass</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">concreteMethod</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;ConcreteClass1.concreteMethod() is called.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体类 ConcreteClass2</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConcreteClass2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AbstractClass</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">concreteMethod</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;ConcreteClass2.concreteMethod() is called.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 客户端代码</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">concrete1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConcreteClass1</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">concrete2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConcreteClass2</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">concrete1.</span><span style="color:#6F42C1;">executeAlgorithm</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">concrete2.</span><span style="color:#6F42C1;">executeAlgorithm</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 在上面的示例中，AbstractClass 是一个抽象类，</span></span>
<span class="line"><span style="color:#6A737D;"> * 它定义了一个模板方法 executeAlgorithm() </span></span>
<span class="line"><span style="color:#6A737D;"> * 和三个抽象方法 stepOne()、stepTwo()、stepThree()。</span></span>
<span class="line"><span style="color:#6A737D;"> * executeAlgorithm() 方法是该设计模式的核心，它提供了模板方法的骨架，</span></span>
<span class="line"><span style="color:#6A737D;"> * 其中调用了三个抽象方法和一个具体方法 concreteMethod()。</span></span>
<span class="line"><span style="color:#6A737D;"> * </span></span>
<span class="line"><span style="color:#6A737D;"> * 具体类 ConcreteClass1 和 ConcreteClass2 </span></span>
<span class="line"><span style="color:#6A737D;"> * 继承自 AbstractClass 并实现了 concreteMethod() 方法，</span></span>
<span class="line"><span style="color:#6A737D;"> * 在执行模板方法时，它们将重写掉父类中定义的抽象方法，</span></span>
<span class="line"><span style="color:#6A737D;"> * 从而实现了自己的具体行为。</span></span>
<span class="line"><span style="color:#6A737D;"> * 在客户端代码中，我们创建了两个具体类的实例，</span></span>
<span class="line"><span style="color:#6A737D;"> * 然后通过调用它们的 executeAlgorithm() 方法来执行模板方法。</span></span>
<span class="line"><span style="color:#6A737D;"> * 当执行完模板方法后，ConcreteClass1 和 ConcreteClass2 的具体方法都会被调用，</span></span>
<span class="line"><span style="color:#6A737D;"> * 从而实现了它们各自的行为。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div>`,15),e=[o];function c(r,t,E,y,i,u){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{m as __pageData,F as default};
