<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">

    <title>Icon Tab Bar</title>

    <script id="sap-ui-bootstrap"
            src="/resources/sap-ui-core.js"
    data-sap-ui-libs="sap.m"
    data-sap-ui-theme="sap_bluecrystal"
    data-sap-ui-xx-bindingSyntax="complex"
    data-sap-ui-preload="async"
    data-sap-ui-compatVersion="edge"
    data-sap-ui-resourceroots='{
    "sap.m.sample.login": "/login/",
    "sap.m.sample.header":"/header/"
    }'>
    </script>

    <!-- Application launch configuration -->
    <script>

        sap.ui.getCore().attachInit(function() {
            new sap.m.App ({
                pages: [
                    new sap.m.Page({
                        title : "User Login",
                        showHeader:true,
                        enableScrolling : true,
                        content: [ new sap.ui.core.ComponentContainer({
                            height : "100%", name : "sap.m.sample.login"
                        })]
                    })
                ]
            }).placeAt("content");
        });

    </script>
</head>

<!-- UI Content -->
<body class="sapUiBody" role="application">
    <%@ include file="/header/header.html" %>
    <div id="content">

    </div>
</body>

</html>
