from django.shortcuts import render
from django.http.response import JsonResponse
from django.http import HttpResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework import viewsets
from django.urls import reverse
from rest_framework.response import Response
from .models import Stations
from .models import Bicis 
from .models import Slot
from .serializers import SlotSerializer
from .serializers import BicisSerializer
from .serializers import StationsSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
def stations_list(request):   
    if request.method == 'GET':
        stations = Stations.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            stations = stations.filter(title__icontains=title)
        
        stations_serializer = StationsSerializer(stations, many=True)
        return Response(stations_serializer.data) 

    elif request.method == 'POST':
        stations_data = JSONParser().parse(request)
        stations_serializer = StationsSerializer(data=stations_data)

        if stations_serializer.is_valid():
            stations_serializer.save()
            return Response(stations_serializer.data, status=status.HTTP_201_CREATED) 
        return Response(stations_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Stations.objects.all().delete()
        return Response({'message': '{} stations were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
    
 
@api_view(['GET', 'PUT', 'DELETE'])
def stations_detail(request, pk):
    try: 
        stations = Stations.objects.get(id=pk) 
    except Stations.DoesNotExist: 
        return JsonResponse({'message': 'The stations does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        stations_serializer = StationsSerializer(stations) 
        return JsonResponse(stations_serializer.data) 
 
    elif request.method == 'PUT': 
        stations_data = JSONParser().parse(request) 
        stations_serializer = StationsSerializer(stations, data=stations_data) 
        if stations_serializer.is_valid(): 
            stations_serializer.save() 
            return JsonResponse(stations_serializer.data) 
        return JsonResponse(stations_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        stations.delete() 
        return JsonResponse({'message': 'stations was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
   
         
@api_view(['GET'])
def stations_list_published(request):

    stations = Stations.objects.filter(published=True)
        
    if request.method == 'GET': 
        stations_serializer = StationsSerializer(stations, many=True)
        return JsonResponse(stations_serializer.data, safe=False)
    return JsonResponse({'message': 'GET list of stations, POST a new station, DELETE all stations'}) 

class BicisView(viewsets.GenericViewSet):

    # def get_permissions(self):
    #     if self.request.method == 'GET':
    #         self.permission_classes = [AllowAny]
    #     else:
    #         self.permission_classes = [IsAuthenticated, IsAdmin]
    #     return super(BicisView, self).get_permissions()

    def getBicis(self, request, slug=None):
        bicis = Bicis.objects.all()
        bicis_serializer = BicisSerializer(bicis, many=True)
        return Response(bicis_serializer.data)

    def getOneBicis(self, request, id):
        bicis = Bicis.objects.get(id=id)
        bicis_serializer = BicisSerializer(bicis)
        return Response(bicis_serializer.data)

    def post(self, request):
        bici = request.data.get('bici')
        serializer = BicisSerializer(data=bici)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)

    def put(self, request, id):
        bici = Bicis.objects.get(id=id)
        data = request.data.get('bici')
        serializer = BicisSerializer(bici, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        slot = request.data.get('slot')
        if (slot):
            if slot['id'] is not None:
                slot_context = {'bicis_id': bici.id, 'status': 'vacant'}
                saved_slot = Slot.objects.get(pk=slot['id'])
                SlotSerializer.update(instance=saved_slot, context=slot_context)

        return Response(serializer.data)

    def delete(self, request, id):
        bicis = Bicis.objects.get(id=id)
        bicis.delete()
        return Response({'data': 'Bicis deleted successfully'})


class SlotView(viewsets.GenericViewSet):

    # def get_permissions(self):
    #     if self.request.method == 'GET':
    #         self.permission_classes = [AllowAny]
    #     else:
    #         self.permission_classes = [IsAuthenticated, IsAdmin]
    #     return super(SlotView, self).get_permissions()

    def getSlots(self, request):
        if request.GET.get('station_id') is not None:
            slots = Slot.objects.filter(station_id=request.GET.get('station_id'))
        else:
            slots = Slot.objects.all()

        serializer = SlotSerializer(slots, many=True)
        return Response(serializer.data)

    def getOneSlot(self, request, id):
        slot = Slot.objects.all(pk=id)
        slot_serializer = SlotSerializer(slot)
        return Response(slot_serializer.data)
