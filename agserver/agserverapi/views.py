from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from yelpapi import YelpAPI
from .config import api_key

class LocationSearch(ViewSet):
    def list(self, request):
        
        yelp_api = YelpAPI(api_key)
        search_location = self.request.query_params.get("location", None)
        search_results = yelp_api.search_query(location = search_location)

        return Response(search_results["businesses"])