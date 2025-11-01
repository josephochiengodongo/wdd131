
   <script>
        const lastModified = new Date(document.lastModified);
        const days=string(lastModified.getDate()).padStart (2,'0');
        const months=string(lastModified.getMonth()+1).padStart (2,'0');
        const years=lastModified.getFullYear();
        const formattedDate=`Last Modified: ${days}/${months}/${years}`;
        document.getElementById('lastmod').textContent = formattedDate;
   </script>
