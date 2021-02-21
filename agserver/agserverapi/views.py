from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from yelpapi import YelpAPI
from .config import api_key

class LocationSearch(ViewSet):
    def list(self, request):
        
        yelp_api = YelpAPI(api_key)
        search_location = self.request.query_params.get("location", None)
        search_total = yelp_api.search_query(location = search_location, sort_by='rating', limit=0)
        
        if search_total["total"] > 1000:
            offset_amt = 950
        else:
            offset_amt = (search_total["total"] - 50)

        search_results = yelp_api.search_query(location = search_location, sort_by='rating', limit=50, offset=offset_amt)

        return Response(search_results["businesses"])