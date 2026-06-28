window.preprocessListing = function(items){

    items.forEach(pub => {

        //--------------------------------------------------
        // Authors
        //--------------------------------------------------

        if(pub.authors){

            pub.authorString = pub.authors
                .map(a =>

                    a === "Piyush Chaudhari"

                    ? `<strong>${a}</strong>`

                    : a

                ).join(", ");

        }

        //--------------------------------------------------
        // Status badge
        //--------------------------------------------------

        pub.badge = "";

        if(pub.status === "Published")
            pub.badge = "published";

        if(pub.status === "Preprint")
            pub.badge = "preprint";

        if(pub.status === "Accepted")
            pub.badge = "accepted";

        //--------------------------------------------------
        // Buttons
        //--------------------------------------------------

        pub.links=[];

        if(pub.pdf)
            pub.links.push({
                text:"PDF",
                url:pub.pdf
            });

        if(pub.poster)
            pub.links.push({
                text:"Poster",
                url:pub.poster
            });

        if(pub.slides)
            pub.links.push({
                text:"Slides",
                url:pub.slides
            });

        if(pub.code)
            pub.links.push({
                text:"Code",
                url:pub.code
            });

        if(pub.video)
            pub.links.push({
                text:"Video",
                url:pub.video
            });

        if(pub.doi)
            pub.links.push({
                text:"DOI",
                url:pub.doi
            });

        //--------------------------------------------------
        // Featured icon
        //--------------------------------------------------

        pub.star = pub.featured ? "⭐" : "";

    });

    return items;
}