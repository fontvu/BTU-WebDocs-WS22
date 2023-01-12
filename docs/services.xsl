<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/collection">
       <html>
       <body>
        <table border="1">
         <tr>
          <th>Service</th>
          <th>Pricing</th>
          <th>Year</th>
         </tr>
          <xsl:for-each select="service">
          <tr>
           <td><xsl:value-of select="service_name"/></td>
           <td><xsl:value-of select="package_price"/></td>
          </tr>
       </xsl:for-each>
       </table>
       </body>
       </html>
    </xsl:template>
</xsl:stylesheet>
