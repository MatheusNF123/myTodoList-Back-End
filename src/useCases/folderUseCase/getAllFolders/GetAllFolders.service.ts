import { IFolders } from '../../../entities/IFolders';
import { IFolderRepository } from '../../../repositories/IFolder.repository';
export default class GetllAllFoldersService {
  constructor(private folderRepo: IFolderRepository) {}

  async findAll(id: number):Promise<IFolders[]>{
    const folders = await this.folderRepo.findAll(id);

    return folders;
  }
}