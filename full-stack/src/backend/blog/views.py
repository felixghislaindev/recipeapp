from django.http import JsonResponse

def posts(request):
    json_object = {'key': "value"}
    return JsonResponse(json_object)
