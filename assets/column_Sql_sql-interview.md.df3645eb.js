import{_ as e,o as a,c as l,Q as o}from"./chunks/framework.49cce418.js";const p=JSON.parse('{"title":"SQL面试题","description":"","frontmatter":{},"headers":[],"relativePath":"column/Sql/sql-interview.md","filePath":"column/Sql/sql-interview.md"}'),t={name:"column/Sql/sql-interview.md"},i=o('<h1 id="sql面试题" tabindex="-1">SQL面试题 <a class="header-anchor" href="#sql面试题" aria-label="Permalink to &quot;SQL面试题&quot;">​</a></h1><h2 id="_1-索引相关" tabindex="-1">1. 索引相关 <a class="header-anchor" href="#_1-索引相关" aria-label="Permalink to &quot;1. 索引相关&quot;">​</a></h2><h3 id="_1-1-索引的类型有哈希索引-b-树索引-而hash索引的时间复杂度是o-1-那为什么我们一般情况下不使用哈希索引-而使用b-树索引" tabindex="-1">1.1 索引的类型有哈希索引，B+树索引，而hash索引的时间复杂度是O(1)，那为什么我们一般情况下不使用哈希索引，而使用B+树索引？ <a class="header-anchor" href="#_1-1-索引的类型有哈希索引-b-树索引-而hash索引的时间复杂度是o-1-那为什么我们一般情况下不使用哈希索引-而使用b-树索引" aria-label="Permalink to &quot;1.1 索引的类型有哈希索引，B+树索引，而hash索引的时间复杂度是O(1)，那为什么我们一般情况下不使用哈希索引，而使用B+树索引？&quot;">​</a></h3><p>虽然哈希索引具有O(1)的常量时间复杂度，但在大多数情况下，我们更倾向于使用B+树索引而不是哈希索引。这是因为B+树索引在许多方面提供了更好的性能和更多的优势：</p><p>范围查询：B+树索引是有序的，它可以支持范围查询，例如查询一个范围内的数据或者基于排序的操作。而哈希索引无法提供这种功能，因为哈希算法是无序的，数据在内存中散列无法自然形成顺序。</p><p>排序和分组：B+树索引可以帮助优化排序操作和分组操作。哈希索引无法很好地支持这些操作，因为哈希算法是基于数据的散列分布，在进行聚合计算时，需要对散列的数据进行合并操作，效率相对较低。</p><p>磁盘存储和IO访问：B+树索引是基于有序的树状结构，可以有效利用磁盘的顺序读取，减少随机IO的开销。而哈希索引在存储和访问的过程中无法充分利用顺序读取，可能导致更多的磁盘寻道操作。</p><p>索引的动态维护：哈希索引在插入和删除操作时，需要重新计算和调整哈希表，可能会导致额外的性能开销。而B+树索引的调整相对较小，维护成本更低。</p><p>冲突处理：哈希索引在处理哈希冲突时需要进行额外的操作，例如链表或开放寻址法，这些操作会导致查询的性能下降。而B+树索引不存在冲突问题。</p><p>尽管哈希索引在某些特定的场景下可能会更快，但综合考虑，B+树索引更适合通用的数据库查询需求。它提供了更多的灵活性和高效的查询能力，适用于范围查询、排序操作、聚合计算等常见的数据库操作。</p><h3 id="_1-2-索引字段是不是建的越多越好" tabindex="-1">1.2 索引字段是不是建的越多越好？ <a class="header-anchor" href="#_1-2-索引字段是不是建的越多越好" aria-label="Permalink to &quot;1.2 索引字段是不是建的越多越好？&quot;">​</a></h3><h3 id="_1-3-主从复制的原理" tabindex="-1">1.3 主从复制的原理 <a class="header-anchor" href="#_1-3-主从复制的原理" aria-label="Permalink to &quot;1.3 主从复制的原理&quot;">​</a></h3><h3 id="_1-4-mysql中btree算法的原理" tabindex="-1">1.4 MySql中BTree算法的原理 <a class="header-anchor" href="#_1-4-mysql中btree算法的原理" aria-label="Permalink to &quot;1.4 MySql中BTree算法的原理&quot;">​</a></h3><h3 id="_1-5-一个select语句在数据库里整个运行的流程" tabindex="-1">1.5 一个select语句在数据库里整个运行的流程 <a class="header-anchor" href="#_1-5-一个select语句在数据库里整个运行的流程" aria-label="Permalink to &quot;1.5 一个select语句在数据库里整个运行的流程&quot;">​</a></h3><h3 id="_1-6-一个update语句-在数据库里整个更新的底层原理" tabindex="-1">1.6 一个update语句，在数据库里整个更新的底层原理 <a class="header-anchor" href="#_1-6-一个update语句-在数据库里整个更新的底层原理" aria-label="Permalink to &quot;1.6 一个update语句，在数据库里整个更新的底层原理&quot;">​</a></h3><h3 id="_1-7-在mysql连表查询中on过滤和where过滤的区别" tabindex="-1">1.7 在mysql连表查询中on过滤和where过滤的区别 <a class="header-anchor" href="#_1-7-在mysql连表查询中on过滤和where过滤的区别" aria-label="Permalink to &quot;1.7 在mysql连表查询中on过滤和where过滤的区别&quot;">​</a></h3><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><ol><li>可重复读，已提交读，这两个隔离级别表现的现象是什么，区别是什么样的？</li><li>对一个慢sql怎么去排查</li><li>为什么数据库字段，建议设置为NOT NULL? 属于开发规范的问题。这个问题在考察求职者是否对于数据库设计有一个比较全面性的考虑，以及良好的数据库实践经验。规则本身并不具备强约束的特征，所以好与不好，仍然是看实际业务需求，以及如果设置允许NULL会带来的影响</li></ol><ul><li>3.1 数据的完整性 通过把字段设置为<code>NOT NULL</code>,可以确保数据库中的数据是完整的。如果某个字段允许为空，那么有可能在数据中出现不完整或不一致的情况。</li><li>3.2 查询性能 把字段设置为<code>NOT NULL</code>,还可以提高查询的效率，数据库在执行查询的时候，不需要额外的处理空值的情况，可以更加快速去定位符合条件的数据行</li><li>3.3 开发的友好性 如果把字段设置为<code>NOT NULL</code>,可以减少对空值的额外处理逻辑，开发人员可以更加简洁，和清晰的去编写代码，不需要考虑空值情况的特殊处理</li><li>3.4 数据一致性约束 通过把字段设置为<code>NOT NULL</code>，可以在数据库层面强制实施数据一致性约束，这样可以避免应用程序层面，忽略或者错误的处理空值情况，减少了数据质量问题的一个可能性。</li></ul><ol start="4"><li>数据库与数仓的区别</li></ol><ul><li><ol><li>数据库通常服务于业务，数据仓库通常服务于分析。</li></ol></li></ul><blockquote><p>数据库(ERP、OA、CRM、APP)：数据通过这些软件程序和背后的数据库进行交互，在底层的数据表上进行增删改的的操作。 数据仓库(BI可视化、报表工具)：通过各种BI前端可视化分析工具或者报表工具来访问数据仓库，最终是面向报表查询，数据分析服务的。</p></blockquote><ul><li><ol start="2"><li>数据来源</li></ol></li><li><ol start="3"><li>数据存放差别</li></ol></li></ul><blockquote><p>数据库：不存放历史数据，数据随系统变化 数据仓库：存放大量的历史数据，数据是静态的</p></blockquote><ul><li><ol start="4"><li>最核心的区别在于建模方式和数据的冗余</li></ol></li></ul><ol start="5"><li>在Linux中文件删除的原理</li></ol>',26),r=[i];function h(s,n,c,d,u,_){return a(),l("div",null,r)}const b=e(t,[["render",h]]);export{p as __pageData,b as default};
