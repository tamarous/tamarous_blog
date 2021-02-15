(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{380:function(t,n,e){"use strict";e.r(n);var i=e(42),o=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"leetcode-62-unique-paths"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-62-unique-paths"}},[t._v("#")]),t._v(" LeetCode-62-Unique Paths")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode.com/problems/unique-paths/description/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这道题"),e("OutboundLink")],1),t._v("是一道典型的动态规划问题。如图：\n"),e("img",{attrs:{src:"https://leetcode.com/static/images/problemset/robot_maze.png",alt:"Robot"}})]),t._v(" "),e("p",[t._v("一个机器人的起始位置是左上方的网格，每次只能往下或者往右走。网格的长和高分别是 m 和 n，求机器人要走到图中的五角星处共有多少种走法？")]),t._v(" "),e("p",[t._v("思路：生成一个大小为 m*n 的二维数组，记为 dp，dp[i][j]表示走到图中第 i 行第 j 列个网格点共有多少种走法。首先考虑第一行。由于机器人只能往下和往右走，因此位于第一行的网格点只有一直往右这一种走法，因此 "),e("code",[t._v("dp[0][j] = 1")]),t._v("。同理位于第一列的网格点只有一直往下这一种走法，因此"),e("code",[t._v("dp[i][0] = 1")]),t._v("。")]),t._v(" "),e("p",[t._v("现在考虑第 i 行第 j 列的网格点。机器人要走到位于第 i 行第 j 列的网格点，只可能从它的左边节点[i][j-1]或是从它的上边的节点[i-1][j]移动一步到达，因此 "),e("code",[t._v("dp[i][j] = dp[i-1][j] + dp[i][j-1]")]),t._v("。这就是这道题的状态转移方程。根据该方程我们就能算出最后一个网格点 "),e("code",[t._v("dp[m-1][n-1]")]),t._v("的值，也就是我们要求的结果。")]),t._v(" "),e("p",[t._v("代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        vector<vector<int> > dp(m,vector<int>(n));\n        dp[0][0] = 1;\n        for(int i = 1; i < m;i++) {\n            dp[i][0] = 1;\n        }\n        for(int i = 1; i < n; i++) {\n            dp[0][i] = 1;\n        }\n        for(int i = 1; i < m; i++) {\n            for(int j = 1; j < n; j++) {\n                dp[i][j] = dp[i-1][j] + dp[i][j-1];\n            }\n        }\n        return dp[m-1][n-1];\n    }\n};\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);